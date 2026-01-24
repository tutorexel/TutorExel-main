// src/components/layout/Header.jsx
"use client";

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FiMenu, FiX } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const logo = '/images/logo.svg';

const subjectsByYear = Array.from({ length: 9 }, (_, i) => ({
  year: `Year ${i + 2}`,
  subjects: ['Maths',  'English'],
}));

// New Exam Prep Menu
const examPrepMenu = [
  {
    name: 'NAPLAN',
    submenus: ['Maths', 'English'],
  },
  // {
  //   name: 'ICAS',
  //   submenus: ['Primary', 'Secondary'],
  // },
];

const Header = () => {
  const pathname = usePathname();
  const [showSubjects, setShowSubjects] = useState(false);
  const [showExamPrep, setShowExamPrep] = useState(false);
  const [activeExam, setActiveExam] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCoCurricular, setShowCoCurricular] = useState(false);

  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY >= 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <Navbar bg="white" expand="lg" className={`shadow-sm p-0 responsive-navbar ${isSticky ? 'fixed-navbar' : ''}`}>
        <Container>
          <Navbar.Brand as={Link} href="/" className="mobile-logo">
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
          <Navbar id="main-navbar-nav" className="d-none d-lg-flex gap-4">
            <Nav className="nav-centered" onMouseLeave={() => setShowSubjects(false)}>
              <Link href="/" className={`nav-link-base ${pathname === "/" ? "active" : ""}`}>Home</Link>
              <Link href="/about-us" className={`nav-link-base ${pathname === "/about-us" ? "active" : ""}`}>About Us</Link>
              
              {/* Custom Dropdown Implementation */}
              <div 
                className="subjects-dropdown-container"
                onMouseEnter={() => setShowSubjects(true)}
                onMouseOut={() => setShowSubjects(showSubjects)}
                onClick={() => setShowSubjects(!showSubjects)}
              >
                <div className="nav-link-base">
                  Subjects
                  <IoIosArrowDown className={`nav-arrow ${showSubjects ? 'open' : ''}`} />
                </div>
                
                {showSubjects && (
                  <div className="subjects-mega-menu">
                    <Container>
                      <Row className='justify-content-around'>
                        {subjectsByYear.map((yearGroup) => (
                          <Col xs="auto" key={yearGroup.year}>
                            <h5>{yearGroup.year}</h5>
                            {yearGroup.subjects.map((subject) => (
                               <Link key={subject} href={`/subjects/${yearGroup.year.replace(' ', '-').toLowerCase()}/${subject.toLowerCase()}`}>
                                {subject}
                              </Link>
                            ))}
                          </Col>
                        ))}
                        <div className='col-auto'>
                          <div className="subjects-dropdown-container">
                            <div className="nav-link-basee">
                              <h5>Prep Zone</h5> 
                            </div>
                                    {examPrepMenu.map((exam) => (
                                      <Col xs="auto" key={exam.name}>
                                        <div
                                          className="exam-parent"
                                          onMouseEnter={() => setActiveExam(exam.name)}
                                          onMouseLeave={() => setActiveExam(null)}
                                        >
                                          {/* First-level link (Naplan / Icas) */}
                                          <Link
                                            href="#"
                                            className="exam-main-link d-flex"
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
                                                  href={`/naplan/year-3/${sub.toLowerCase()}`}
                                                >
                                                  {sub}
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      </Col>
                                    ))}
                          </div>
                        </div>
                      </Row>
                    </Container>
                  </div>
                )}
              </div>

              <div
                className="nav-item-cc"
                onMouseEnter={() => setShowCoCurricular(true)}
                onMouseLeave={() => setShowCoCurricular(false)}
              >
                <div className="nav-link-base">Co-Curricular<IoIosArrowDown className={`nav-arrow ${showCoCurricular ? 'open' : ''}`} /></div>
                {showCoCurricular && (
                  <div className="dropdown-cc">
                    <Link href="/piano" className={`dropdown-link ${pathname === "/piano" ? "active" : ""}`}>
                      Piano
                    </Link>
                    <Link href="/guitar" className={`dropdown-link ${pathname === "/guitar" ? "active" : ""}`}>
                      Guitar
                    </Link>
                    
                  </div>
                )}
              </div>
              <Link href="/pricing" className={`nav-link-base ${pathname === "/pricing" ? "active" : ""}`}>Offerings</Link>
              <Link href="/contact" className={`nav-link-base ${pathname === "/contact" ? "active" : ""}`}>Enroll Now</Link>
            </Nav>

            <Nav className="align-items-center justify-content-end desktop-nav-actions">
              
              <a href="https://learn.tutorexel.com/d2q1kr392kq4gu3vn2ig/d5cahicrtl0urqja0kvg/courses/view/vQv1DYN._1UqwIGhiyA632W6Rr43YuGq3XCaJR-sclBEPqctuHqy9auyK9FTp72xL39iniEmXUhxnKZFFjzjfPgfeXa_NL4JgNLlTdscLCfEmS8LaAV9ZeHhzKG4zLxDgjEjgV0FdBqFrvfhV6zdTWB3Qw9iiLE3Ua5iXbCkvyd6wkL4o8DJ" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary-orange"
                  className="d-inline-flex align-items-center"
                  style={{minWidth: '200px'}}
                >
                  Free Assessment Test
                </Button>
              </a>
              <a href="https://learn.tutorexel.com/login" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary-blue"
                  className="d-inline-flex align-items-center"
                >
                  Login
                </Button>
              </a>
            </Nav>
          </Navbar>

          {/* Mobile Offcanvas Menu */}
          <Offcanvas 
            show={showMobileMenu} 
            onHide={handleCloseMobileMenu} 
            placement="end"
            className="mobile-offcanvas"
          >
            <Offcanvas.Header className="mobile-offcanvas-header">
              <Offcanvas.Title className="mobile-offcanvas-title">
                <Link href="/" className="mobile-offcanvas-brand" onClick={handleCloseMobileMenu}>
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
                <Link 
                  href="/" 
                  className={`mobile-nav-link ${pathname === "/" ? "active" : ""}`}
                  onClick={handleCloseMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about-us" 
                  className={`mobile-nav-link ${pathname === "/about-us" ? "active" : ""}`}
                  onClick={handleCloseMobileMenu}
                >
                  About Us
                </Link>
                
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
                              href={`/subjects/${yearGroup.year.replace(' ', '-').toLowerCase()}/${subject.toLowerCase()}`}
                              className="mobile-subject-link"
                              onClick={handleCloseMobileMenu}
                            >
                              {subject}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className="mobile-year-group">
                        <h6 className="mobile-year-title">Prep Zone</h6>
                          <div className="mobile-subjects-menuu">
                            {examPrepMenu.map((exam) => (
                              <div key={exam.name} className="mobile-exam-item">
                                <div className="mobile-exam-header">
                                  {/* Main Naplan/Icas Link */}
                                  <Link
                                    href="#"
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
                                        href={`/naplan/year-3/${sub.toLowerCase()}`}
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
                      </div>
                    </div>
                  )}
                </div>

                {/* <NavLink 
                  href="/play-music" 
                  className="mobile-nav-link"
                  onClick={handleCloseMobileMenu}>
                  Co-Curricular
                </NavLink> */}
                
                <div className="mobile-subjects-section">
                  <div 
                    className="mobile-nav-link mobile-subjects-toggle"
                    onClick={() => setShowCoCurricular(!showCoCurricular)}
                  >
                    Co-Curricular
                    <IoIosArrowDown className={`nav-arrow ${showCoCurricular ? 'open' : ''}`} />
                  </div>
                  {showCoCurricular && (
                      <div className="mobile-subjects-menu">
                                  {/* Main Naplan/Icas Link */}
                                  <Link
                                    href="/piano"
                                    className="mobile-subject-link"
                                    onClick={handleCloseMobileMenu}
                                  >
                                    Piano
                                  </Link>
                                  <Link
                                    href="/guitar"
                                    className="mobile-subject-link"
                                    onClick={handleCloseMobileMenu}
                                  >
                                    Guitar
                                  </Link>
                      
                                </div>
                  )}
                    
                </div>

                <Link 
                  href="/pricing" 
                  className={`mobile-nav-link ${pathname === "/pricing" ? "active" : ""}`}
                  onClick={handleCloseMobileMenu}
                >
                  Offerings
                </Link>

                <Link 
                  href="/contact" 
                  className={`mobile-nav-link ${pathname === "/contact" ? "active" : ""}`}
                  onClick={handleCloseMobileMenu}
                >
                  Enroll Now
                </Link>
                <div className="mobile-cta-section">
                  <a href="https://learn.tutorexel.com/d2q1kr392kq4gu3vn2ig/d5cahicrtl0urqja0kvg/courses/view/vQv1DYN._1UqwIGhiyA632W6Rr43YuGq3XCaJR-sclBEPqctuHqy9auyK9FTp72xL39iniEmXUhxnKZFFjzjfPgfeXa_NL4JgNLlTdscLCfEmS8LaAV9ZeHhzKG4zLxDgjEjgV0FdBqFrvfhV6zdTWB3Qw9iiLE3Ua5iXbCkvyd6wkL4o8DJ" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                    <Button 
                      variant="primary-orange" 
                      className="w-100 mobile-cta-button mb-2"
                      onClick={handleCloseMobileMenu}
                    >
                      Free Assessment Test
                    </Button>
                  </a>
                  <a href="https://learn.tutorexel.com/login" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
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
      {isSticky && <div className="navbar-spacer" />}
    </>
  );
};

export default Header;
