// src/components/layout/Header.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import './layout.css';

const subjectsByYear = Array.from({ length: 9 }, (_, i) => ({
  year: `Year ${i + 2}`,
  subjects: ['Maths',  'English'],
}));

// New Exam Prep Menu
const examPrepMenu = [
  {
    name: 'NAPLAN',
    submenus: ['Primary', 'Secondary'],
  },
  {
    name: 'ICAS',
    submenus: ['Primary', 'Secondary'],
  },
];

const Header = () => {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showExamPrep, setShowExamPrep] = useState(false);
  const [activeExam, setActiveExam] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  return (
    <>
    
      <Navbar bg="white" expand="lg" className="shadow-sm p-0 responsive-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="mobile-logo">
            <img src={logo} alt="TutorExel Logo" className="d-lg-none" />
            <img src={logo} alt="TutorExel Logo" className="d-none d-lg-block desktop-logo" />
          </Navbar.Brand>

          {/* Mobile menu toggle button (search removed on phones) */}
          <div className="d-lg-none mobile-nav-controls">
            <Button 
              variant="link" 
              className="text-dark-navy p-1 mobile-menu-toggle"
              onClick={handleShowMobileMenu}
            >
              <FiMenu size={24} />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="main-navbar-nav" className="d-none d-lg-flex">
            <Nav className="mx-auto nav-centered" onMouseLeave={() => setShowSubjects(false)}>
              <NavLink to="/" className="nav-link-base">Home</NavLink>
              <NavLink to="/about-us" className="nav-link-base">About Us</NavLink>
              
              {/* Custom Dropdown Implementation */}
              <div 
                className="subjects-dropdown-container"
                onMouseEnter={() => setShowSubjects(true)}
                onClick={() => setShowSubjects(!showSubjects)}
              >
                <div className="nav-link-base">
                  Subjects
                  <IoIosArrowDown className={`nav-arrow ${showSubjects ? 'open' : ''}`} />
                </div>
                
                {showSubjects && (
                  <div className="subjects-mega-menu">
                    <Container>
                      <Row>
                        {subjectsByYear.map((yearGroup) => (
                          <Col key={yearGroup.year}>
                            <h5>{yearGroup.year}</h5>
                            {yearGroup.subjects.map((subject) => (
                               <Link key={subject} to={`/subjects/${yearGroup.year.replace(' ', '-').toLowerCase()}/${subject.toLowerCase()}`}>
                                {subject}
                              </Link>
                            ))}
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </div>
                )}
              </div>

              <NavLink to="/musical-instrument" className="nav-link-base">Musical Instrument</NavLink>

              <NavLink to="/pricing" className="nav-link-base">Pricing</NavLink>

              {/* Exam Prep Dropdown */}
              <div
                className="subjects-dropdown-container"
                onMouseEnter={() => setShowExamPrep(true)}
                onMouseLeave={() => {
                                setShowExamPrep(false);
                                setActiveExam(null);
                              }}
                onClick={() => setShowExamPrep(!showExamPrep)}
              >
                <div className="nav-link-base">
                  Exam Prep
                  <IoIosArrowDown
                    className={`nav-arrow ${showExamPrep ? "open" : ""}`}
                  />
                </div>
                {showExamPrep && (
                  <div className="subjects-mega-menu exam-mega-menu">
                    {/* <Container>
                      <Row> */}
                        {examPrepMenu.map((exam) => (
                          <Col key={exam.name}>
                            <div
                              className="exam-parent"
                              onMouseEnter={() => setActiveExam(exam.name)}
                              onMouseLeave={() => setActiveExam(null)}
                            >
                              {/* First-level link (Naplan / Icas) */}
                              <Link
                                to={`/exam-prep/${exam.name.toLowerCase()}`}
                                className="exam-main-link"
                              >
                                {exam.name}
                                <IoIosArrowForward className="submenu-arrow" />
                              </Link>

                              {/* Second-level submenu */}
                              {activeExam === exam.name && (
                                <div className="nested-submenu">
                                  {exam.submenus.map((sub) => (
                                    <Link
                                      key={sub}
                                      to={`/exam-prep/${exam.name.toLowerCase()}/${sub.toLowerCase()}`}
                                    >
                                      {sub}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Col>
                        ))}
                      {/* </Row>
                    </Container> */}
                  </div>
                )}
              </div>

              <NavLink to="/contact" className="nav-link-base">Contact Us</NavLink>
              <NavLink to="/careers" className="nav-link-base">Careers</NavLink>
            </Nav>

            <Nav className="align-items-center justify-content-end desktop-nav-actions">
              
              <a href="https://web.tutorexel.com/login" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary-blue"
                  className="d-inline-flex align-items-center"
                >
                  Login
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>

          {/* Mobile Offcanvas Menu */}
          <Offcanvas 
            show={showMobileMenu} 
            onHide={handleCloseMobileMenu} 
            placement="end"
            className="mobile-offcanvas"
          >
            <Offcanvas.Header className="mobile-offcanvas-header">
              <Offcanvas.Title className="mobile-offcanvas-title">
                <Link to="/" className="mobile-offcanvas-brand" onClick={handleCloseMobileMenu}>
                  <img src={logo} alt="TutorExel Logo" className="mobile-offcanvas-logo" />
                </Link>
              </Offcanvas.Title>
              <Button 
                variant="link" 
                className="text-dark-navy p-0"
                onClick={handleCloseMobileMenu}
              >
                <FiX size={24} />
              </Button>
            </Offcanvas.Header>
            <Offcanvas.Body className="mobile-offcanvas-body">
              <Nav className="flex-column mobile-nav">
                <NavLink 
                  to="/" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about-us" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}
                >
                  About Us
                </NavLink>
                
                {/* Mobile Subjects Dropdown */}
                <div className="mobile-subjects-section">
                  <div 
                    className="mobile-nav-link mobile-subjects-toggle"
                    onClick={() => setShowSubjects(!showSubjects)}
                  >
                    Subjects
                    <IoIosArrowDown className={`nav-arrow ${showSubjects ? 'open' : ''}`} />
                  </div>
                  
                  {showSubjects && (
                    <div className="mobile-subjects-menu">
                      {subjectsByYear.map((yearGroup) => (
                        <div key={yearGroup.year} className="mobile-year-group">
                          <h6 className="mobile-year-title">{yearGroup.year}</h6>
                          {yearGroup.subjects.map((subject) => (
                            <Link 
                              key={subject} 
                              to={`/subjects/${yearGroup.year.replace(' ', '-').toLowerCase()}/${subject.toLowerCase()}`}
                              className="mobile-subject-link"
                              onClick={handleCloseMobileMenu}
                            >
                              {subject}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <NavLink 
                  to="/musical-instrument" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}>
                  Musical Instrument
                </NavLink>

                <NavLink 
                  to="/pricing" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}
                >
                  Pricing
                </NavLink>

                {/* Mobile Exam Prep Section */}
                <div className="mobile-subjects-section">
                  <div
                    className="mobile-nav-link mobile-subjects-toggle"
                    onClick={() => setShowExamPrep(!showExamPrep)}
                  >
                    Exam Prep
                    <IoIosArrowDown className={`nav-arrow ${showExamPrep ? "open" : ""}`} />
                  </div>

                  {showExamPrep && (
                    <div className="mobile-subjects-menu">
                      {examPrepMenu.map((exam) => (
                        <div key={exam.name} className="mobile-exam-item">
                          <div className="mobile-exam-header">
                            {/* Main Naplan/Icas Link */}
                            <Link
                              to={`/exam-prep/${exam.name.toLowerCase()}`}
                              className="mobile-subject-link"
                              onClick={handleCloseMobileMenu}
                            >
                              {exam.name}
                            </Link>

                            {/* Arrow toggle (on right side) */}
                            <button
                              type="button"
                              className="mobile-subject-toggle-btn"
                              onClick={() =>
                                setActiveExam(activeExam === exam.name ? null : exam.name)
                              }
                            >
                              <IoIosArrowDown
                                className={`nav-arrow ${activeExam === exam.name ? "open" : ""}`}
                              />
                            </button>
                          </div>

                          {/* SECOND-LEVEL SUBMENU (now positioned directly under this item) */}
                          {activeExam === exam.name && (
                            <div className="mobile-submenu">
                              {exam.submenus.map((sub) => (
                                <Link
                                  key={sub}
                                  to={`/exam-prep/${exam.name.toLowerCase()}/${sub.toLowerCase()}`}
                                  className="mobile-submenu-link"
                                  onClick={handleCloseMobileMenu}
                                >
                                  {sub}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>


                <NavLink 
                  to="/contact" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}
                >
                  Contact Us
                </NavLink>
                <NavLink 
                  to="/careers" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}
                >
                  Careers
                </NavLink>
                
                <div className="mobile-cta-section">
                  <a href="https://web.tutorexel.com/login" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                    <Button 
                      variant="secondary-blue" 
                      className="w-100 mobile-cta-button"
                      onClick={handleCloseMobileMenu}
                    >
                      Login
                    </Button>
                  </a>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
