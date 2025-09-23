import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // React Router ke liye
import logo from '../../assets/images/logo.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

// Reuse the same Coming Soon modal design as HomePage
const ComingSoonModal = ({ isOpen, onClose, title = "Coming Soon!" }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white position-relative mx-3"
        style={{ 
          maxWidth: '450px', 
          width: '100%',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 15px 30px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1)',
          animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          border: '1px solid rgba(254, 157, 16, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="position-absolute"
          style={{
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontSize: '18px',
            color: '#666'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.2)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
          aria-label="Close"
        >
          ×
        </button>
        
        {/* Modal content */}
        <div className="text-center" style={{ padding: '40px 40px 50px 40px' }}>
          {/* Icon */}
          <div 
            className="d-inline-flex align-items-center justify-content-center mb-4"
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(254, 157, 16, 0.1), rgba(255, 140, 0, 0.1))',
              borderRadius: '50%',
              border: '3px solid rgba(254, 157, 16, 0.2)'
            }}
          >
            <span style={{ fontSize: '36px' }}>🚀</span>
          </div>
          
          <h2 className="fw-bold mb-3" style={{ 
            fontSize: '2.2rem',
            color: '#2c3e50',
            letterSpacing: '-0.5px'
          }}>
            {title}
          </h2>
          
          <p className="mb-4" style={{ 
            fontSize: '1.1rem',
            color: '#64748b',
            lineHeight: '1.6',
            margin: '0 auto',
            maxWidth: '300px'
          }}>
            This subject will be available shortly. We're working hard to bring you amazing content!
          </p>
          
          {/* Single centered button */}
          <div className="d-flex justify-content-center mt-4">
            <button
              onClick={onClose}
              className="btn fw-semibold"
              style={{ 
                backgroundColor: '#fe9d10',
                borderColor: '#fe9d10',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(254, 157, 16, 0.3)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e88a0e';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(254, 157, 16, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fe9d10';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(254, 157, 16, 0.3)';
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  // Subjects with links
  const subjects = [
    { name: 'Maths', link: '/subjects/mathematics' },
    { name: 'English', link: '/subjects/english' },
    { name: 'Science (Coming Soon)', link: '/subjects/science' },
    { name: 'Hindi (Coming Soon)', link: '/subjects/hindi' },
    { name: 'NAPLAN', link: '/prep-zone/naplan' },
    { name: 'ICAS', link: '/prep-zone/icas' },
    { name: 'Play Music', link: '/play-music' },
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
          <Row className="g-5">
            {/* About Column */}
            <Col lg={4} md={12} className="pe-lg-5">
              <img src={logo} alt="TutorExel Logo" className="mb-3 footer-logo" />
              <p className="footer-about-text text-white-50">
                At TutorExel, we understand student struggles and parent concerns. 
                Our personalized online tutoring builds confidence, improves performance, 
                and helps students reach their academic goals - every step of the way.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="https://www.facebook.com/share/1Za9NLXEqM/"><img src={iconFacebook} alt="Facebook" style={{ width: '32px' }}/></a>
                <a href="https://www.instagram.com/tutorexellearning?igsh=MWNrejdyMWtyd2lsOQ== https://www.facebook.com/share/1Za9NLXEqM/"><img src={iconInstagram} alt="Instagram" style={{ width: '32px' }}/></a>
              </div>
            </Col>

            {/* Subjects Column */}
            <Col lg={3} md={4}>
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
            <Col lg={2} md={4}>
              <h5 className="text-white fw-bold mb-4">Quick Links</h5>
              <Link to="/about-us" className="text-white-50 text-decoration-none mb-2 d-block">About Us</Link>
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
              {/* WhatsApp quick chat link */}
              <div className="mt-3">
                <a
                  href="https://wa.me/919872550572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none d-inline-flex align-items-center gap-2"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={28} color="#25D366" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </Col>
          </Row>
          
          <hr className="my-5" />
          
          <p className="text-center text-white-50 small">
            Copyright © {new Date().getFullYear()} TutorExel. All Rights Reserved.
          </p>
        </Container>
      </footer>

      {/* Coming Soon Modal (same as HomePage) */}
      <ComingSoonModal isOpen={showModal} onClose={handleCloseModal} title="Coming Soon!" />
    </>
  );
};

export default Footer;
