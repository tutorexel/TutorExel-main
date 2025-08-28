// src/screens/ContactPage/TeacherForm.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import PageHero from '../../components/ui/PageHero';
import logo from '../../assets/images/logo.svg';
import './TeacherForm.css';

const subjectsOptions = ['Mathematics', 'Science', 'English', 'Hindi'];
const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `Year ${i + 2}`);

const TeacherForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '', email: '', whatsapp: '', location: '', highestQualification: '',
    subjects: {}, yearGroups: {},
    taughtBefore: '', 
    hasLaptop: '', 
    hasInternet: '', 
    comfortableWithZoom: '',
    cv: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const groupName = e.target.getAttribute('data-group');
    if (groupName) {
      setFormData(prev => ({ ...prev, [groupName]: { ...prev[groupName], [name]: checked } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleViewFile = () => {
    if (formData.cv) {
      const fileURL = URL.createObjectURL(formData.cv);
      window.open(fileURL, '_blank');
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({ ...prev, cv: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (Object.values(formData.subjects).every(v => !v)) newErrors.subjects = 'Please select at least one subject.';
    if (Object.values(formData.yearGroups).every(v => !v)) newErrors.yearGroups = 'Please select at least one year group.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Tutor Application Submitted:", formData);
      navigate('/contact/thank-you', { state: { from: 'teacher' } });
    }
  };

  return (
    <main>
      <PageHero title="Tutor Application" />
      <section className="py-5 bg-light-gray">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <Form onSubmit={handleSubmit}>
                <div className="form-container">
                  <h2>Apply to Join <img src={logo} alt="TutorExel" style={{ height: '35px', verticalAlign: 'text-bottom' }} /> as a Tutor</h2>
                  <h4 className="form-section-heading">Basic Details</h4>
                  <Row>
                    <Col md={6}><Form.Group className="mb-4"><Form.Control required className="form-control-custom" type="text" name="fullName" placeholder="Full Name (Required)" onChange={handleChange} /></Form.Group></Col>
                    <Col md={6}><Form.Group className="mb-4"><Form.Control required className="form-control-custom" type="email" name="email" placeholder="Email Address (Required)" onChange={handleChange} /></Form.Group></Col>
                  </Row>
                  <Row>
                    <Col md={6}><Form.Group className="mb-4"><Form.Control required className="form-control-custom" type="tel" name="whatsapp" placeholder="WhatsApp Number (Required)" onChange={handleChange} /></Form.Group></Col>
                    <Col md={6}><Form.Group className="mb-4"><Form.Control required className="form-control-custom" type="text" name="location" placeholder="Location (City, Country)" onChange={handleChange} /></Form.Group></Col>
                  </Row>
                  
                  <h4 className="form-section-heading">Education & Experience</h4>
                  <Form.Group className="mb-4"><Form.Control required className="form-control-custom" type="text" name="highestQualification" placeholder="Highest Qualification" onChange={handleChange} /></Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Subjects You Can Teach</Form.Label>
                    <div className="d-flex flex-wrap gap-4">{subjectsOptions.map(s => <Form.Check key={s} type="checkbox" name={s} label={s} id={`s-${s}`} className="custom-form-check" data-group="subjects" onChange={handleChange} />)}</div>
                    {errors.subjects && <div className="text-danger mt-2">{errors.subjects}</div>}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Year Groups You Can Teach</Form.Label>
                    <div className="d-flex flex-wrap gap-4">{yearGroupOptions.map(y => <Form.Check key={y} type="checkbox" name={y} label={y} id={`y-${y}`} className="custom-form-check" data-group="yearGroups" onChange={handleChange} />)}</div>
                    {errors.yearGroups && <div className="text-danger mt-2">{errors.yearGroups}</div>}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Have You Taught the Australian Curriculum Before?</Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check required type="radio" name="taughtBefore" label="Yes" value="yes" id="tb-yes" className="custom-form-check" onChange={handleChange} />
                      <Form.Check type="radio" name="taughtBefore" label="No" value="no" id="tb-no" className="custom-form-check" onChange={handleChange} />
                    </div>
                  </Form.Group>
                  
                  {/* 5. ADD THE NEW TECHNOLOGY REQUIREMENTS SECTION */}
                  <h4 className="form-section-heading">Technology Requirements</h4>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Do you have a laptop or desktop for teaching?</Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      {/* 6. Add the 'required' attribute for validation */}
                      <Form.Check required type="radio" name="hasLaptop" label="Yes" value="yes" id="laptop-yes" className="custom-form-check" onChange={handleChange} />
                      <Form.Check type="radio" name="hasLaptop" label="No" value="no" id="laptop-no" className="custom-form-check" onChange={handleChange} />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Do you have a stable internet connection?</Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check required type="radio" name="hasInternet" label="Yes" value="yes" id="internet-yes" className="custom-form-check" onChange={handleChange} />
                      <Form.Check type="radio" name="hasInternet" label="No" value="no" id="internet-no" className="custom-form-check" onChange={handleChange} />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">Are you comfortable using Zoom or Google Meet for teaching?</Form.Label>
                    <div className="d-flex flex-wrap gap-4">
                      <Form.Check required type="radio" name="comfortableWithZoom" label="Yes" value="yes" id="zoom-yes" className="custom-form-check" onChange={handleChange} />
                      <Form.Check type="radio" name="comfortableWithZoom" label="No" value="no" id="zoom-no" className="custom-form-check" onChange={handleChange} />
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
                        <p className="file-size">{(formData.cv.size / 1024).toFixed(2)} KB</p>
                        <div>
                          <button type="button" className="file-action-link" onClick={handleViewFile}>View</button>
                          <button type="button" className="file-action-link" onClick={handleRemoveFile}>Remove</button>
                        </div>
                      </div>
                    ) : (
                      <div className="file-upload-area" onClick={() => fileInputRef.current.click()}>
                        <p><strong>Upload Your CV</strong></p>
                        <span className="file-formats">PDF/Word format</span>
                        <div className="btn-upload">Upload</div>
                      </div>
                    )}
                  </Form.Group>
                </div>

                <div className="text-start mt-4">
                  <Button type="submit" className="btn-submit-form">Submit Application <FaArrowRight /></Button>
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