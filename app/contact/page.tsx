// src/screens/ContactPage/StudentForm.jsx
"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

import PageHero from "@/components/ui/PageHero";
import { submitToEndpoint, buildFormData } from "@/services/formSubmit";

import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js";

const subjectsOptions = ["Mathematics", "English"];
const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `Year ${i + 2}`);
const offeringOptions = [
  "Live Online Coaching",
  "Co-Curricular",
  "Naplan Bootcamp",
];
const activityoptions = ["Piano", "Guitar"];

type Offering = "Live Online Coaching" | "Naplan Bootcamp" | "Co-Curricular";
type LiveOnlineClassType = "one-to-one" | "group";
type NaplanClassType = "live-coaching" | "self-learning";
type NaplanPreferredType = "one-to-one" | "group";
type CountKey = 1 | 2;

const pricingRules: {
  "Live Online Coaching": Record<LiveOnlineClassType, Record<CountKey, number>>;
  "Naplan Bootcamp": {
    "live-coaching": Record<NaplanPreferredType, Record<CountKey, number>>;
    "self-learning": Record<CountKey, number>;
  };
  "Co-Curricular": {
    checkboxOnly: Record<CountKey, number>;
  };
} = {
  "Live Online Coaching": {
    "one-to-one": { 1: 99, 2: 169 },
    group: { 1: 49, 2: 79 },
  },
  "Naplan Bootcamp": {
    "live-coaching": {
      "one-to-one": { 1: 199, 2: 349 },
      group: { 1: 119, 2: 199 },
    },
    "self-learning": { 1: 29, 2: 49 },
  },
  "Co-Curricular": {
    checkboxOnly: { 1: 60, 2: 100 },
  },
};

interface FormData {
  parentName: string;
  studentName: string;
  email: string;
  whatsapp: string;
  subjects: Record<string, boolean>; // <-- type-safe dictionary
  yearGroup: string;
  classType: string;
  preferredType: string;
}

const StudentForm = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    studentName: "",
    email: "",
    whatsapp: "",
    subjects: {},
    yearGroup: "",
    classType: "", // Live Online Coaching OR Naplan type
    preferredType: "", // one-to-one | group (Naplan live coaching)
  });

  const [offering, setOffering] = useState("");
  const [price, setPrice] = useState(0);
  const [subjectsError, setSubjectsError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    whatsapp: "",
  });

  /* ---------------- PRICE CALCULATION (SINGLE SOURCE) ---------------- */

  useEffect(() => {
    const rawSelectedCount = Object.values(formData.subjects).filter(
      Boolean,
    ).length;

    if (!offering || rawSelectedCount === 0) {
      setPrice(0);
      return;
    }

    // safe cast because we know it’s 1 or 2
    const selectedCount = rawSelectedCount as CountKey;

    switch (offering as Offering) {
      case "Co-Curricular": {
        setPrice(
          pricingRules["Co-Curricular"].checkboxOnly[selectedCount] || 0,
        );
        break;
      }

      case "Naplan Bootcamp": {
        if (formData.classType === "self-learning") {
          setPrice(
            pricingRules["Naplan Bootcamp"]["self-learning"][selectedCount] ||
              0,
          );
        } else if (
          formData.classType === "live-coaching" &&
          formData.preferredType
        ) {
          const preferred = formData.preferredType as NaplanPreferredType;
          setPrice(
            pricingRules["Naplan Bootcamp"]["live-coaching"][preferred][
              selectedCount
            ] || 0,
          );
        } else {
          setPrice(0);
        }
        break;
      }

      case "Live Online Coaching": {
        if (!formData.classType || selectedCount > 2) {
          setPrice(0);
        } else {
          const classType = formData.classType as LiveOnlineClassType;
          setPrice(
            pricingRules["Live Online Coaching"][classType][selectedCount] || 0,
          );
        }
        break;
      }

      default:
        setPrice(0);
    }
  }, [offering, formData.classType, formData.preferredType, formData.subjects]);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    // Only inputs have 'checked'
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    // Offering change
    if (name === "offerings") {
      setOffering(value as Offering);
      setFormData((prev) => ({
        ...prev,
        subjects: {},
        classType: "",
        preferredType: "",
      }));
      setSubjectsError("");
      setPrice(0);
      return;
    }

    // Checkbox (subjects / activities)
    if (type === "checkbox") {
      const updatedSubjects = {
        ...formData.subjects,
        [name]: checked!,
      };

      if (Object.values(updatedSubjects).some(Boolean)) {
        setSubjectsError("");
      }

      setFormData((prev) => ({
        ...prev,
        subjects: updatedSubjects,
      }));
      return;
    }

    // Radio / text / select inputs
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateWhatsapp = (phone: string): string => {
    if (!phone || phone.length < 5) return "WhatsApp number is required";
    if (!isValidPhoneNumber(phone))
      return "Please enter a valid WhatsApp number";
    return "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasSelection = Object.values(formData.subjects).some(Boolean);
    if (!hasSelection) {
      setSubjectsError("Please select at least one option.");
      return;
    }

    const whatsappError = validateWhatsapp(formData.whatsapp);
    if (whatsappError) {
      setErrors({ whatsapp: whatsappError });
      return;
    }

    try {
      setSubmitting(true);

      const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

      const payload = {
        form: "contact",
        submittedAt: new Date().toISOString(),
        parentName: formData.parentName,
        studentName: formData.studentName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        subjects: Object.keys(formData.subjects)
          .filter((k) => formData.subjects[k])
          .join(", "),
        yearGroup: formData.yearGroup,
        classType: formData.classType,
        preferredType: formData.preferredType,
        offering,
        price,
      };

      const fd = buildFormData(payload);
      await submitToEndpoint({ endpoint, formData: fd });

      router.push(`/contact/thank-you?from=student&price=${price}`);
    } catch (err: unknown) {
      console.error("Form submission error:", err);

      const message =
        err instanceof Error
          ? err.message
          : "Submission failed. Please try again later.";

      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- JSX ---------------- */

  return (
    <main>
      <PageHero title="Enroll Now" />

      <section className="py-5 bg-light-gray">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Form onSubmit={handleSubmit}>
                <div className="form-container">
                  <h2 className="section-heading">Let's Get Started</h2>
                  <p className="subheading"></p>
                  {/* --- Text Inputs --- */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          name="parentName"
                          placeholder="Parent's Name *"
                          required
                          className="form-control-custom"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Parent Email Address *"
                          required
                          className="form-control-custom"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        {/* <Form.Control type="tel" name="whatsapp" placeholder="WhatsApp Number (With Country Code)*" required className="form-control-custom" onChange={handleChange} /> */}
                        <PhoneInput
                          country="au"
                          enableSearch
                          value={formData.whatsapp}
                          onChange={(value, country) => {
                            const formatted = `+${value}`;

                            setFormData((prev) => ({
                              ...prev,
                              whatsapp: formatted,
                            }));

                            setErrors((prev) => ({
                              ...prev,
                              whatsapp: validateWhatsapp(formatted),
                            }));
                          }}
                          inputClass="form-control form-control-phone"
                          containerClass="w-100"
                          buttonClass="border-end"
                          placeholder="WhatsApp Number (With Country Code)*"
                          inputStyle={{
                            width: "100%",
                            height: "48px",
                            fontSize: "1rem",
                          }}
                          inputProps={{
                            name: "whatsapp",
                            required: true,
                            placeholder: "WhatsApp Number (With Country Code)*",
                          }}
                        />

                        {errors.whatsapp && (
                          <div className="text-danger mt-2">
                            {errors.whatsapp}
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          type="text"
                          name="studentName"
                          placeholder="Student's Name"
                          className="form-control-custom"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Form.Group className="mb-4"><Form.Control type="text" name="cityCountry" placeholder="City & Country *" required className="form-control-custom" onChange={handleChange} /></Form.Group> */}

                  <Row>
                    <Col md={6}>
                      {/* --- Year Group Dropdown --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Student's Year Group (Australian Equivalent)
                        </Form.Label>
                        <Form.Select
                          name="yearGroup"
                          required
                          className="form-control-custom"
                          onChange={handleChange}
                        >
                          <option value="">Select Student's Year Group</option>
                          {yearGroupOptions.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Our Offerings
                        </Form.Label>
                        <Form.Select
                          name="offerings"
                          required
                          className="form-control-custom"
                          onChange={handleChange}
                        >
                          <option value="">Select Offerings</option>
                          {offeringOptions.map((offering) => (
                            <option key={offering} value={offering}>
                              {offering}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {offering === "Live Online Coaching" && (
                    <>
                      {/* --- Class Type Radios --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Preferred Class Type
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-4">
                          <Form.Check
                            type="radio"
                            name="classType"
                            label="One-to-One Session"
                            value="one-to-one"
                            id="radio-one-to-one"
                            className="custom-form-check"
                            onChange={handleChange}
                            required
                          />
                          <Form.Check
                            type="radio"
                            name="classType"
                            label="Group Class "
                            value="group"
                            id="radio-group"
                            className="custom-form-check"
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>

                      {/* --- Subjects Checkboxes --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Subject(s) You're Interested In
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-4">
                          {subjectsOptions.map((subject) => {
                            const selectedCount = Object.values(
                              formData.subjects,
                            ).filter(Boolean).length;
                            const isChecked =
                              formData.subjects[subject] || false;

                            return (
                              <Form.Check
                                key={subject}
                                type="checkbox"
                                name={subject}
                                label={subject}
                                id={`check-${subject}`}
                                className="custom-form-check"
                                onChange={handleChange}
                                checked={isChecked}
                                disabled={
                                  !formData.classType ||
                                  (!isChecked && selectedCount >= 2)
                                }
                              />
                            );
                          })}
                        </div>
                        {/* 4. Display the error message if it exists */}
                        {subjectsError && (
                          <div className="text-danger mt-2">
                            {subjectsError}
                          </div>
                        )}
                      </Form.Group>
                    </>
                  )}

                  {offering === "Co-Curricular" && (
                    <>
                      {/* --- Cocurricular Activities Checkboxes --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Activities You're Interested In
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-4">
                          {activityoptions.map((activity) => (
                            <Form.Check
                              key={activity}
                              type="checkbox"
                              name={activity}
                              label={activity}
                              id={`check-${activity}`}
                              className="custom-form-check"
                              onChange={handleChange}
                            />
                          ))}
                        </div>
                        {/* 4. Display the error message if it exists */}
                        {subjectsError && (
                          <div className="text-danger mt-2">
                            {subjectsError}
                          </div>
                        )}
                      </Form.Group>
                    </>
                  )}

                  {offering === "Naplan Bootcamp" && (
                    <>
                      {/* --- Class Type Radios --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Naplan Package Type
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-4">
                          <Form.Check
                            type="radio"
                            name="classType"
                            label="Live Coaching and Material"
                            value="live-coaching"
                            id="radio-live-coaching"
                            className="custom-form-check"
                            onChange={handleChange}
                            required
                          />
                          <Form.Check
                            type="radio"
                            name="classType"
                            label="Self Learning Material"
                            value="self-learning"
                            id="radio-self-learning"
                            className="custom-form-check"
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>

                      {formData.classType === "live-coaching" && (
                        <Form.Group className="mb-4">
                          <Form.Label className="form-label">
                            Preferred Class Type
                          </Form.Label>
                          <div className="d-flex flex-wrap gap-4">
                            <Form.Check
                              type="radio"
                              name="preferredType"
                              label="One-to-One Session"
                              value="one-to-one"
                              id="radioNap-one-to-one"
                              className="custom-form-check"
                              onChange={handleChange}
                              required
                            />
                            <Form.Check
                              type="radio"
                              name="preferredType"
                              label="Group Class (3:1)"
                              value="group"
                              id="radioNap-group"
                              className="custom-form-check"
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                      )}

                      {/* --- Subjects Checkboxes --- */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label">
                          Subject(s) You're Interested In
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-4">
                          {subjectsOptions.map((subject) => {
                            const selectedCount = Object.values(
                              formData.subjects,
                            ).filter(Boolean).length;
                            const isChecked =
                              formData.subjects[subject] || false;

                            return (
                              <Form.Check
                                key={subject}
                                type="checkbox"
                                name={subject}
                                label={subject}
                                id={`check-${subject}`}
                                className="custom-form-check"
                                onChange={handleChange}
                                checked={isChecked}
                                disabled={
                                  !formData.classType ||
                                  (formData.classType === "live-coaching" &&
                                    (!formData.preferredType ||
                                      (!isChecked && selectedCount >= 2))) ||
                                  (formData.classType === "self-learning" &&
                                    !isChecked &&
                                    selectedCount >= 2)
                                }
                              />
                            );
                          })}
                        </div>
                        {/* 4. Display the error message if it exists */}
                        {subjectsError && (
                          <div className="text-danger mt-2">
                            {subjectsError}
                          </div>
                        )}
                      </Form.Group>
                    </>
                  )}

                  {price > 0 && (
                    <div className="mt-3 p-3 border rounded fw-bold">
                      Total Amount: ${price}
                    </div>
                  )}

                  <div className="text-start mt-4">
                    <Button
                      type="submit"
                      className="btn-submit-form d-flex align-items-center"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting…" : "Submit"} <FaArrowRight />
                    </Button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default StudentForm;
