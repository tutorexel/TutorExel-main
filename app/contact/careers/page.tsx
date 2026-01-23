// src/screens/ContactPage/TeacherForm.jsx

"use client";
import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

import PageHero from "@/components/ui/PageHero";
import { submitToEndpoint, buildFormData } from "@/services/formSubmit";

const subjectsOptions = ["Mathematics", "Science", "English", "Hindi"];
const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `Year ${i + 2}`);

type CheckboxGroup = Record<string, boolean>;

type TeacherFormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  location: string;
  highestQualification: string;
  subjects: CheckboxGroup;
  yearGroups: CheckboxGroup;
  taughtBefore: string;
  hasLaptop: string;
  hasInternet: string;
  comfortableWithZoom: string;
  cv: File | null;
};

type FormErrors = {
  subjects?: string;
  yearGroups?: string;
};

type TutorPayload = {
  form: string;
  submittedAt: string;
  fullName: string;
  email: string;
  whatsapp: string;
  location: string;
  highestQualification: string;
  subjects: string;
  yearGroups: string;
  taughtBefore: string;
  hasLaptop: string;
  hasInternet: string;
  comfortableWithZoom: string;
  cvBase64?: string;
  cvName?: string;
  cvType?: string;
};

const TeacherForm = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<TeacherFormData>({
    fullName: "",
    email: "",
    whatsapp: "",
    location: "",
    highestQualification: "",
    subjects: {},
    yearGroups: {},
    taughtBefore: "",
    hasLaptop: "",
    hasInternet: "",
    comfortableWithZoom: "",
    cv: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const groupName = e.target.getAttribute("data-group");

    if (groupName === "subjects" || groupName === "yearGroups") {
      setFormData((prev) => ({
        ...prev,
        [groupName]: {
          ...prev[groupName],
          [name]: checked,
        },
      }));
      return;
    }

    // 👇 name is now narrowed to known keys
    setFormData((prev) => ({
      ...prev,
      [name as keyof TeacherFormData]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files![0],
    }));
  };

  const handleViewFile = () => {
    if (formData.cv) {
      const fileURL = URL.createObjectURL(formData.cv);
      window.open(fileURL, "_blank");
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (Object.values(formData.subjects).every((v) => !v))
      newErrors.subjects = "Please select at least one subject.";
    if (Object.values(formData.yearGroups).every((v) => !v))
      newErrors.yearGroups = "Please select at least one year group.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setSubmitting(true);
      if (!process.env.NEXT_PUBLIC_TUTOR_FORM_ENDPOINT) {
        throw new Error("Tutor form endpoint is not defined");
      }

      const endpoint = process.env.NEXT_PUBLIC_TUTOR_FORM_ENDPOINT;
      console.log("Submitting form to endpoint:", endpoint);
      console.log("Form data CV file:", formData.cv);

      const payload: TutorPayload = {
        form: "tutor-application",
        submittedAt: new Date().toISOString(),
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        location: formData.location,
        highestQualification: formData.highestQualification,
        subjects: Object.keys(formData.subjects)
          .filter((k) => formData.subjects[k])
          .join(", "),
        yearGroups: Object.keys(formData.yearGroups)
          .filter((k) => formData.yearGroups[k])
          .join(", "),
        taughtBefore: formData.taughtBefore,
        hasLaptop: formData.hasLaptop,
        hasInternet: formData.hasInternet,
        comfortableWithZoom: formData.comfortableWithZoom,
      };

      // Add a base64 fallback for the CV so Apps Script can save it even if e.files is empty
      if (formData.cv) {
        console.log(
          "Processing CV file:",
          formData.cv.name,
          formData.cv.size,
          "bytes",
        );
        const file = formData.cv;
        const asBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = String(reader.result || "");
            const comma = result.indexOf(",");
            resolve(comma >= 0 ? result.slice(comma + 1) : result);
          };
          reader.onerror = () =>
            reject(reader.error || new Error("File read error"));
          reader.readAsDataURL(file);
        });
        payload.cvBase64 = asBase64;
        payload.cvName = file.name;
        payload.cvType = file.type || "application/octet-stream";
        console.log("Base64 conversion completed, length:", asBase64.length);
      } else {
        console.log("No CV file selected");
      }

      const fd = buildFormData(payload);
      if (formData.cv) {
        fd.append("cv", formData.cv, formData.cv.name);
        console.log("CV file appended to FormData");
      }

      console.log("Sending request...");
      const response = await submitToEndpoint({ endpoint, formData: fd });
      console.log("Response received:", response);

      router.push("/contact/thank-you?from=teacher");
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

  return (
    <main>
      <PageHero title="Tutor Application" />
      <section className="py-5 bg-light-gray">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Form onSubmit={handleSubmit}>
                <div className="form-container">
                  <h2 className="section-heading">Apply to Join as a Tutor</h2>
                  <h4 className="form-section-heading">Basic Details</h4>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          required
                          className="form-control-custom"
                          type="text"
                          name="fullName"
                          placeholder="Full Name *"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          required
                          className="form-control-custom"
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          required
                          className="form-control-custom"
                          type="tel"
                          name="whatsapp"
                          placeholder="WhatsApp Number *"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Control
                          required
                          className="form-control-custom"
                          type="text"
                          name="location"
                          placeholder="Location (City, Country)"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <h4 className="form-section-heading">
                    Education & Experience
                  </h4>
                  <Form.Group className="mb-4">
                    <Form.Control
                      required
                      className="form-control-custom"
                      type="text"
                      name="highestQualification"
                      placeholder="Highest Qualification"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Subjects You Can Teach
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      {subjectsOptions.map((s) => (
                        <Form.Check
                          key={s}
                          type="checkbox"
                          name={s}
                          label={s}
                          id={`s-${s}`}
                          className="custom-form-check"
                          data-group="subjects"
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                    {errors.subjects && (
                      <div className="text-danger mt-2">{errors.subjects}</div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Year Groups You Can Teach
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      {yearGroupOptions.map((y) => (
                        <Form.Check
                          key={y}
                          type="checkbox"
                          name={y}
                          label={y}
                          id={`y-${y}`}
                          className="custom-form-check"
                          data-group="yearGroups"
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                    {errors.yearGroups && (
                      <div className="text-danger mt-2">
                        {errors.yearGroups}
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Have You Taught the Australian Curriculum Before?
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check
                        required
                        type="radio"
                        name="taughtBefore"
                        label="Yes"
                        value="yes"
                        id="tb-yes"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        name="taughtBefore"
                        label="No"
                        value="no"
                        id="tb-no"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  {/* 5. ADD THE NEW TECHNOLOGY REQUIREMENTS SECTION */}
                  <h4 className="form-section-heading">
                    Technology Requirements
                  </h4>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Do you have a laptop or desktop for teaching?
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      {/* 6. Add the 'required' attribute for validation */}
                      <Form.Check
                        required
                        type="radio"
                        name="hasLaptop"
                        label="Yes"
                        value="yes"
                        id="laptop-yes"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        name="hasLaptop"
                        label="No"
                        value="no"
                        id="laptop-no"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Do you have a stable internet connection?
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check
                        required
                        type="radio"
                        name="hasInternet"
                        label="Yes"
                        value="yes"
                        id="internet-yes"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        name="hasInternet"
                        label="No"
                        value="no"
                        id="internet-no"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      Are you comfortable using Zoom or Google Meet for
                      teaching?
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check
                        required
                        type="radio"
                        name="comfortableWithZoom"
                        label="Yes"
                        value="yes"
                        id="zoom-yes"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        name="comfortableWithZoom"
                        label="No"
                        value="no"
                        id="zoom-no"
                        className="custom-form-check"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  <h4 className="form-section-heading">Document Upload</h4>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      hidden
                    />
                    {formData.cv ? (
                      <div className="file-display-area">
                        <p className="file-name">{formData.cv.name}</p>
                        <p className="file-size">
                          {(formData.cv.size / 1024).toFixed(2)} KB
                        </p>
                        <div>
                          <button
                            type="button"
                            className="file-action-link"
                            onClick={handleViewFile}
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="file-action-link"
                            onClick={handleRemoveFile}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="file-upload-area"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <p>
                          <strong>Upload Your CV</strong>
                        </p>
                        <span className="file-formats">PDF/Word format</span>
                        <div className="btn-upload">Upload</div>
                      </div>
                    )}
                  </Form.Group>
                </div>

                <div className="text-start mt-4">
                  <Button
                    type="submit"
                    className="btn-submit-form d-flex align-items-center"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Submit Application"}{" "}
                    <FaArrowRight />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default TeacherForm;
