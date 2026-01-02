// src/screens/ContactPage/StudentForm.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';

import logo from '../../assets/images/logo.svg';
import PageHero from '../../components/ui/PageHero';
import './StudentForm.css';
import { submitToEndpoint, buildFormData } from '../../services/formSubmit';

import PhoneInput from 'react-phone-input-2';
import '../../../node_modules/react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

const subjectsOptions = ['Mathematics', 'English'];
const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `Year ${i + 2}`);
const offeringOptions = ['Live online', 'Co-Curricular', 'Naplan Bootcamp'];
const activityoptions = ['Piano', 'Guitar'];

const pricingRules = {
  'Live online': {
    'one-to-one': { 1: 99, 2: 169 },
    'group': { 1: 49, 2: 79 },
  },
  'Naplan Bootcamp': {
    'live-coaching': { 
      'one-to-one': {1: 199, 2: 349},
      'group' : {1: 119, 2: 199}
    },
    'self-learning': { 1: 29, 2: 39 },
  },
  'Co-Curricular': {
    checkboxOnly: { 1: 60, 2: 100 },
  },
};

const StudentForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    whatsapp: '',
    subjects: {},
    yearGroup: '',
    classType: '',        // Live online OR Naplan type
    preferredType: '',    // one-to-one | group (Naplan live coaching)
  });

  const [offering, setOffering] = useState('');
  const [price, setPrice] = useState(0);
  const [subjectsError, setSubjectsError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    whatsapp: '',
  });

  /* ---------------- PRICE CALCULATION (SINGLE SOURCE) ---------------- */

  useEffect(() => {
    const selectedCount = Object.values(formData.subjects).filter(Boolean).length;

    if (!offering || selectedCount === 0) {
      setPrice(0);
      return;
    }

    if (offering === 'Co-Curricular') {
      setPrice(
        pricingRules['Co-Curricular'].checkboxOnly[selectedCount] || 0
      );
      return;
    }

    /* ---------------- NAPLAN BOOTCAMP ---------------- */
    if (offering === 'Naplan Bootcamp') {
      if (formData.classType === 'self-learning') {
        setPrice(
          pricingRules['Naplan Bootcamp']['self-learning'][selectedCount] || 0
        );
        return;
      }

      if (!formData.preferredType) {
        setPrice(0);
        return;
      }

      setPrice(
        pricingRules['Naplan Bootcamp']['live-coaching']?.[formData.preferredType]?.[selectedCount] || 0
      );
      return;
    }

    /* ---------------- LIVE ONLINE ---------------- */
    if (!formData.classType || selectedCount > 2) {
      setPrice(0);
      return;
    }

    const newPrice =
      pricingRules[offering]?.[formData.classType]?.[selectedCount] || 0;

    setPrice(newPrice);
  }, [offering, formData.classType, formData.subjects]);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Offering change
    if (name === 'offerings') {
      setOffering(value);
      setFormData((prev) => ({
        ...prev,
        subjects: {},
        classType: '',
        preferredType: '',
      }));
      setSubjectsError('');
      setPrice(0);
      return;
    }

    // Checkbox (subjects / activities)
    if (type === 'checkbox') {
      const updatedSubjects = {
        ...formData.subjects,
        [name]: checked,
      };

      if (Object.values(updatedSubjects).some(Boolean)) {
        setSubjectsError('');
      }

      setFormData((prev) => ({
        ...prev,
        subjects: updatedSubjects,
      }));
      return;
    }

    // Radio / text inputs
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateWhatsapp = (number) => {
    if (!number || number.length < 5) return 'WhatsApp number is required';
    if (!isValidPhoneNumber(number)) return 'Please enter a valid WhatsApp number';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasSelection = Object.values(formData.subjects).some(Boolean);
    if (!hasSelection) {
      setSubjectsError('Please select at least one option.');
      return;
    }

    const whatsappError = validateWhatsapp(formData.whatsapp);
    if (whatsappError) {
      setErrors({ whatsapp: whatsappError });
      return;
    }

    try {
      setSubmitting(true);

      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      const payload = {
        form: 'contact',
        submittedAt: new Date().toISOString(),
        parentName: formData.parentName,
        studentName: formData.studentName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        subjects: Object.keys(formData.subjects)
          .filter((k) => formData.subjects[k])
          .join(', '),
        yearGroup: formData.yearGroup,
        classType: formData.classType,
        preferredType: formData.preferredType,
        offering,
        price,
      };

      const fd = buildFormData(payload);
      await submitToEndpoint({ endpoint, formData: fd });

      navigate('/contact/thank-you', { state: { from: 'student' } });
    } catch (err) {
      alert(err.message || 'Submission failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- JSX ---------------- */

  return (
    <main>
      <Helmet>
        <title>Contact TutorExel | Get Tutoring Help Across Australia</title>
        <meta
          name="description"
          content="Need support? Contact TutorExel’s expert team today."
        />
        <meta property="og:title" content="Contact TutorExel" />
        <meta property="og:image" content={logo} />
      </Helmet>

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
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="text" name="parentName" placeholder="Parent's Name *" required className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="email" name="email" placeholder="Parent Email Address *" required className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
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

                                    setFormData(prev => ({
                                      ...prev,
                                      whatsapp: formatted
                                    }));

                                    setErrors(prev => ({
                                      ...prev,
                                      whatsapp: validateWhatsapp(formatted)
                                    }));
                                  }}
                                  inputClass="form-control form-control-phone"
                                  containerClass="w-100"
                                  buttonClass="border-end"
                                  placeholder="WhatsApp Number (With Country Code)*"
                                  inputStyle={{
                                    width: '100%',
                                    height: '48px',
                                    fontSize: '1rem'
                                  }}
                                  inputProps={{
                                    name: 'whatsapp',
                                    required: true,
                                    placeholder: 'WhatsApp Number (With Country Code)*'
                                  }}
                                />

                                {errors.whatsapp && (
                                  <div className="text-danger mt-2">{errors.whatsapp}</div>
                                )}
                              </Form.Group>
                            </Col>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="text" name="studentName" placeholder="Student's Name (Optional)" className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                        </Row>
                        {/* <Form.Group className="mb-4"><Form.Control type="text" name="cityCountry" placeholder="City & Country *" required className="form-control-custom" onChange={handleChange} /></Form.Group> */}

                        <Row>
                            <Col md={6}>
                              {/* --- Year Group Dropdown --- */}
                              <Form.Group className="mb-4">
                                <Form.Label className="form-label">Student's Year Group (Australian Equivalent)</Form.Label>
                                <Form.Select name="yearGroup" required className="form-control-custom" onChange={handleChange}>
                                  <option value="">Select Student's Year Group</option>
                                  {yearGroupOptions.map(year => <option key={year} value={year}>{year}</option>)}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-4">
                                <Form.Label className="form-label">Our Offerings</Form.Label>
                                <Form.Select name="offerings" required className="form-control-custom" onChange={handleChange}>
                                  <option value="">Select Offerings</option>
                                  {offeringOptions.map(offering => <option key={offering} value={offering}>{offering}</option>)}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                        </Row>

                        {offering === 'Live online' && (
                          <>
                          {/* --- Class Type Radios --- */}
                          <Form.Group className="mb-4">
                              <Form.Label className="form-label">Preferred Class Type</Form.Label>
                              <div className="d-flex flex-wrap gap-4">
                                <Form.Check type="radio" name="classType" label="One-to-One Session" value="one-to-one" id="radio-one-to-one" className="custom-form-check" onChange={handleChange} required />
                                <Form.Check type="radio" name="classType" label="Group Class " value="group" id="radio-group" className="custom-form-check" onChange={handleChange} />
                              </div>
                          </Form.Group>

                          {/* --- Subjects Checkboxes --- */}
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label">Subject(s) You're Interested In</Form.Label>
                            <div className="d-flex flex-wrap gap-4">
                              {subjectsOptions.map(subject => {
                                const selectedCount = Object.values(formData.subjects).filter(Boolean).length;
                                const isChecked = formData.subjects[subject] || false;

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
                            {subjectsError && <div className="text-danger mt-2">{subjectsError}</div>}
                          </Form.Group>
                          </>
                        )}
                        

                        {offering === 'Co-Curricular' && (
                          <>

                          {/* --- Cocurricular Activities Checkboxes --- */}
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label">Activities You're Interested In</Form.Label>
                            <div className="d-flex flex-wrap gap-4">
                              {activityoptions.map(activity => (
                                <Form.Check key={activity} type="checkbox" name={activity} label={activity} id={`check-${activity}`} className="custom-form-check" onChange={handleChange} />
                              ))}
                            </div>
                            {/* 4. Display the error message if it exists */}
                            {subjectsError && <div className="text-danger mt-2">{subjectsError}</div>}
                          </Form.Group>
                          </>
                        )}
                        

                        {offering === 'Naplan Bootcamp' && (
                          <>

                          {/* --- Class Type Radios --- */}
                          <Form.Group className="mb-4">
                              <Form.Label className="form-label">Naplan Package Type</Form.Label>
                              <div className="d-flex flex-wrap gap-4">
                              <Form.Check type="radio" name="classType" label="Live Coaching and Material" value="live-coaching" id="radio-live-coaching" className="custom-form-check" onChange={handleChange} required />
                              <Form.Check type="radio" name="classType" label="Self Learning Material" value="self-learning" id="radio-self-learning" className="custom-form-check" onChange={handleChange} />
                              </div>
                          </Form.Group>

                          {formData.classType === 'live-coaching' && (
                            <Form.Group className="mb-4">
                                <Form.Label className="form-label">Preferred Class Type</Form.Label>
                                <div className="d-flex flex-wrap gap-4">
                                  <Form.Check type="radio" name="preferredType" label="One-to-One Session" value="one-to-one" id="radioNap-one-to-one" className="custom-form-check" onChange={handleChange} required />
                                  <Form.Check type="radio" name="preferredType" label="Group Class (3:1)" value="group" id="radioNap-group" className="custom-form-check" onChange={handleChange} />
                                </div>
                            </Form.Group>
                          )}

                          {/* --- Subjects Checkboxes --- */}
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label">Subject(s) You're Interested In</Form.Label>
                            <div className="d-flex flex-wrap gap-4">
                              {subjectsOptions.map(subject => {
  const selectedCount = Object.values(formData.subjects).filter(Boolean).length;
  const isChecked = formData.subjects[subject] || false;

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
                (!formData.classType) ||
                (formData.classType === 'live-coaching' &&
                  (!formData.preferredType || (!isChecked && selectedCount >= 2))) ||
                (formData.classType === 'self-learning' && !isChecked && selectedCount >= 2)
              }
    />
  );
})}
                            </div>
                            {/* 4. Display the error message if it exists */}
                            {subjectsError && <div className="text-danger mt-2">{subjectsError}</div>}
                          </Form.Group>
                          </>
                        )}
                        
                        {price > 0 && (
                  <div className="mt-3 p-3 border rounded fw-bold">
                    Total Amount: ${price}
                  </div>
                )}

                <div className="text-start mt-4">
                  <Button type="submit" className="btn-submit-form"
                  disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit'} <FaArrowRight />
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
