import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // React Router ke liye
import logo from '../../assets/images/logo.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  // Subjects with links
  const subjects = [
    { name: 'Maths', link: '/subjects/mathematics' },
    { name: 'English', link: '/subjects/english' },
    { name: 'Science (Coming Soon)', link: '/subjects/science' },
    { name: 'Hindi (Coming Soon)', link: '/subjects/hindi' },
  ];

  const handleSubjectClick = (subject, e) => {
    if (subject.name.includes('Coming Soon')) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <footer className="bg-almost-black text-white-50 footer-section">
        <Container>
          <Row className="gy-5">
            {/* About Column */}
            <Col lg={4} md={12}>
              <img src={logo} height="25" alt="TutorExel Logo" className="mb-3" />
              <p>
                At TutorExel, we understand student struggles and parent concerns. 
                Our personalized online tutoring builds confidence, improves performance, 
                and helps students reach their academic goals - every step of the way.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#"><img src={iconFacebook} alt="Facebook" style={{ width: '32px' }}/></a>
                <a href="#"><img src={iconInstagram} alt="Instagram" style={{ width: '32px' }}/></a>
              </div>
            </Col>

            {/* Subjects Column */}
            <Col lg={2} md={4}>
              <h5 className="text-white fw-bold mb-4">Subjects</h5>
              <ul className="footer-subjects-list d-grid gap-2">
                {subjects.map((subject) => (
                  <li key={subject.name}>
                    {subject.name.includes('Coming Soon') ? (
                      <a
                        href={subject.link}
                        className="text-white-50 text-decoration-none"
                        onClick={(e) => handleSubjectClick(subject, e)}
                        style={{ cursor: 'pointer' }}
                      >
                        {subject.name}
                      </a>
                    ) : (
                      <Link 
                        to={subject.link} 
                        className="text-white-50 text-decoration-none"
                      >
                        {subject.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Col>

            {/* Quick Links */}
            <Col lg={3} md={4}>
              <h5 className="text-white fw-bold mb-4">Quick Links</h5>
              <Link to="/about" className="text-white-50 text-decoration-none mb-2 d-block">About Us</Link>
              <Link to="/careers" className="text-white-50 text-decoration-none mb-2 d-block">Careers</Link>
              <Link to="/contact" className="text-white-50 text-decoration-none mb-2 d-block">Contact Us</Link>
            </Col>

            {/* Contact */}
            <Col lg={3} md={4}>
              <h5 className="text-white fw-bold mb-4">Contact</h5>
              <a 
                href="mailto:info@tutorexel.com" 
                className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
              >
                <MdEmail /> info@tutorexel.com
              </a>
            </Col>
          </Row>
          
          <hr className="my-5" />
          
          <p className="text-center text-white-50 small">
            Copyright © {new Date().getFullYear()} TutorExel. All Rights Reserved.
          </p>
        </Container>
      </footer>

      {/* Coming Soon Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">This subject will be available shortly. Stay tuned!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
