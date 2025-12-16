import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // React Router ke liye
import logo from '../../assets/images/logo.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);

    // Optional: handle subscription logic here
    // fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

    setEmail(""); // clear input
  };


    return (
    <>
      <footer className="text-white-50 footer-section" style={{backgroundColor: "#000"}}>
        <Container className='pb-5'>
          <Row className="g-5">
            {/* About Column */}
            <Col lg={3} md={12} className="pe-lg-5">
              <img src={logo} alt="TutorExel Logo" className="mb-3 footer-logo" />
              <p className="footer-about-text text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="https://www.facebook.com/share/1Za9NLXEqM/"><img src={iconFacebook} alt="Facebook" style={{ width: '32px' }}/></a>
                <a href="https://www.instagram.com/tutorexellearning?igsh=MWNrejdyMWtyd2lsOQ== https://www.facebook.com/share/1Za9NLXEqM/"><img src={iconInstagram} alt="Instagram" style={{ width: '32px' }}/></a>
              </div>
            </Col>

            

            {/* Subjects */}
            <Col lg={3} md={4}>
              <h5 className="text-white fw-bold mb-4">Subjects</h5>
              <Link to="/about-us" className="text-white text-decoration-none mb-2 d-block">Mathematics</Link>
              <Link to="/contact" className="text-white text-decoration-none mb-2 d-block">Science</Link>
              <Link to="/term-condition" className="text-white text-decoration-none mb-2 d-block">English</Link>
              <Link to="/privacy-policy" className="text-white text-decoration-none mb-2 d-block">Hindi</Link>
              <Link to="/privacy-policy" className="text-white text-decoration-none mb-2 d-block">Punjabi</Link>
              <Link to="/privacy-policy" className="text-white text-decoration-none mb-2 d-block">Music Instruments</Link>
            </Col>

            {/* Subscribe */}
            <Col lg={3} md={12}>
              <h5 className="text-white fw-bold mb-4">Subscribe</h5>
              <Form onSubmit={handleSubmit} className="py-3 d-flex flex-column gap-3 subscribe-form">
                <Form.Group controlId="subscribeEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {/* Button */}
                <Button 
                  type="submit" 
                  style={{ backgroundColor: "#FF9E10", borderColor: "#ff8c00" }}
                >
                  Subscribe Now
                </Button>
              </Form>
            </Col>

            {/* Contact */}
            <Col lg={3} md={4}>
              <h5 className="text-white fw-bold mb-4">Contact</h5>
              <a 
                href="mailto:info@tutorexel.com" 
                className="text-white text-decoration-none d-flex align-items-center gap-2"
              >
                <MdEmail /> info@placementpro.com
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
        </Container>
        {/* <hr /> */}
        <div className="py-4" style={{backgroundColor: '#151515'}}>
        <Container>
          <p className=" text-white small mb-0">
            Copyright © {new Date().getFullYear()} <span style={{color: "#22a3d2"}}>Tutor</span><span style={{color: "#ff9e10"}}>Exel</span> | All Rights Reserved
          </p>
        </Container>
        </div>
      </footer>

    </>
  );
};

export default Footer;