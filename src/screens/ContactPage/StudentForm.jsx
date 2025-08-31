// src/screens/ContactPage/StudentForm.jsx

import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import PageHero from '../../components/ui/PageHero';
import './StudentForm.css'; // Import this page's CSS
import { submitToEndpoint, buildFormData } from '../../services/formSubmit';


// Data for form options
const subjectsOptions = ['Mathematics', 'Science', 'English', 'Hindi'];
const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `Year ${i + 2}`);

const StudentForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
},[]);
  // State to hold all form data
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    whatsapp: '',
    cityCountry: '',
    subjects: {}, // Use an object for multi-select checkboxes
    yearGroup: '',
    classType: '',
    message: '',
  });

  // Handler to update state on input change
  const [subjectsError, setSubjectsError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const newSubjects = {
        ...formData.subjects,
        [name]: checked,
      };

      // 2. Clear the error message as soon as the user selects at least one subject
      if (Object.values(newSubjects).some(isSelected => isSelected)) {
        setSubjectsError('');
      }
      
      setFormData(prev => ({
        ...prev,
        subjects: newSubjects,
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnySubjectSelected = Object.values(formData.subjects).some(isSelected => isSelected === true);
    if (!isAnySubjectSelected) {
      setSubjectsError('Please select at least one subject.');
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
        cityCountry: formData.cityCountry,
        subjects: Object.keys(formData.subjects).filter((k) => formData.subjects[k]).join(', '),
        yearGroup: formData.yearGroup,
        classType: formData.classType,
        message: formData.message,
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

  return (
    <main>
      <PageHero title="Contact Us" />

      <section className="py-5 bg-light-gray">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
                <Form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <h2 className="section-heading">Book a Free Trial</h2>
                        <p className="subheading">Let's Get Started</p>
                        {/* --- Text Inputs --- */}
                        <Row>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="text" name="parentName" placeholder="Parent's Name (Required)" required className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="text" name="studentName" placeholder="Student's Name (Optional)" className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                        </Row>
                        <Row>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="email" name="email" placeholder="Email Address (Required)" required className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                            <Col md={6}><Form.Group className="mb-4"><Form.Control type="tel" name="whatsapp" placeholder="WhatsApp Number (Required)" required className="form-control-custom" onChange={handleChange} /></Form.Group></Col>
                        </Row>
                        <Form.Group className="mb-4"><Form.Control type="text" name="cityCountry" placeholder="City & Country (Required)" required className="form-control-custom" onChange={handleChange} /></Form.Group>

                        {/* --- Subjects Checkboxes --- */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Subject(s) You're Interested In</Form.Label>
                            <div className="d-flex flex-wrap gap-4">
                            {subjectsOptions.map(subject => (
                                <Form.Check key={subject} type="checkbox" name={subject} label={subject} id={`check-${subject}`} className="custom-form-check" onChange={handleChange} />
                            ))}
                            </div>
                            {/* 4. Display the error message if it exists */}
                            {subjectsError && <div className="text-danger mt-2">{subjectsError}</div>}
                        </Form.Group>
                        
                        {/* --- Year Group Dropdown --- */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Student's Year Group (Australian Equivalent)</Form.Label>
                            <Form.Select name="yearGroup" required className="form-control-custom" onChange={handleChange}>
                            <option value="">Select Student's Year Group</option>
                            {yearGroupOptions.map(year => <option key={year} value={year}>{year}</option>)}
                            </Form.Select>
                        </Form.Group>
                        
                        {/* --- Class Type Radios --- */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Preferred Class Type</Form.Label>
                            <div className="d-flex flex-wrap gap-4">
                            <Form.Check type="radio" name="classType" label="One-to-One Session" value="one-to-one" id="radio-one-to-one" className="custom-form-check" onChange={handleChange} required />
                            <Form.Check type="radio" name="classType" label="Group Class " value="group" id="radio-group" className="custom-form-check" onChange={handleChange} />
                            <Form.Check type="radio" name="classType" label="Not Sure Yet" value="not-sure" id="radio-not-sure" className="custom-form-check" onChange={handleChange} />
                            </div>
                        </Form.Group>

                        {/* --- Message Textarea --- */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Message or Notes (Optional)</Form.Label>
                            <Form.Control as="textarea" rows={4} name="message" placeholder="e.g., preferred time slots, learning goals, concerns, etc." className="form-control-custom" onChange={handleChange} />
                        </Form.Group>
                    </div>
                    <div className="text-start mt-4">
                        <Button type="submit" className="btn-submit-form" disabled={submitting}>
                          {submitting ? 'Submitting…' : 'Submit'} <FaArrowRight />
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

export default StudentForm;
