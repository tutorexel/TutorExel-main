// src/components/Hero.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroBoy from '../../assets/images/hero-boy.png'; 
import heroImg from '../../assets/images/home_1.png'; 
import heroImg1 from '../../assets/images/hero_ban1.webp'; 
import playIcon from '../../assets/icons/icon-play.svg';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section-bg py-5 responsive-hero m">
      <Container>
        <Row className="align-items-center gy-4 gy-lg-5 hero-row">
          <Col lg={6} className="text-center text-lg-start hero-content">
            <h1 className="section-heading hero-title text-dark-navy">
                 Live Online Tutoring for Students from Year 2 to Year 10

            </h1>
            <p className="hero-subtitle text-secondary my-3 my-lg-4">
              • English • Maths
            </p>
            
            <div className="hero-actions d-flex flex-column flex-sm-row align-items-center gap-3 gap-lg-4 justify-content-center justify-content-lg-start">
              <Link to="/contact"
                variant="primary-orange" 
                size="sm" 
                className="hero-cta-button d-inline-flex align-items-center main-btn1"
              >
                Book Your Free Trial Class <FaArrowRight className="ms-2" />
              </Link>
              
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center position-relative hero-image-col">
            <div className="hero-image-container">
              <img 
                src={heroImg1} 
                alt="Student learning with headset" 
                className="hero-image img-fluid position-relative" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;