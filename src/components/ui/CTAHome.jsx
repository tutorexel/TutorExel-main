// src/components/ui/CTASection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTA from '../../assets/images/CTAHome.svg';

/**
 * A reusable Call-to-Action section with an overflowing image.
 *
 * ... (all other props documentation) ...
 * @param {string} [props.primaryButtonTextColor] The text color for the primary (white) button.
 * @param {string} [props.secondaryButtonTextColor] The text color for the secondary (blue) button.
 */
const CTAHome = ({
  headingText = 'Ready to Get Started?',
  image = CTA,
  imageAlt = '',
  primaryButtonText = 'Primary Action',
  secondaryButtonText = 'Secondary Action',
  primaryButtonIcon,
  secondaryButtonIcon = <FaArrowRight />,
  primaryButtonTextColor,
  secondaryButtonTextColor,
  customStyles = {},
}) => {
  return (
    <section className="bg-white cta-section" style={{ paddingTop: '10px', paddingBottom: '10px', ...customStyles }}>
      <Container>
        <div className="position-relative">
          <div className="bg-primary-orange-gradient p-5 rounded-4 overflow-hidden" style={{ minHeight: '230px'}}>
            <Row className="align-items-center text-align-center">
              <Col lg={6}>
                <h2 className="section-heading text-white">
                  {headingText}
                </h2>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4 ">
                  <Link to="/contact" 
                    className="main-btn" 
                    style={{ color: primaryButtonTextColor }}
                  >
                    {primaryButtonText} {primaryButtonIcon && <span className="ms-2">{primaryButtonIcon}</span>}
                  </Link>
                  
                  <Link to="/contact" className="main-btn-b"
                    variant="secondary-blue"
                    style={{ color: secondaryButtonTextColor }}
                  >
                    {secondaryButtonText} {secondaryButtonIcon && <span className="ms-2">{secondaryButtonIcon}</span>}
                  </Link>
                </div>
              </Col>
              <Col lg={6}>
                {CTA && (
                  <div className="cta-img">
                    <img 
                      src={CTA} 
                      alt={imageAlt} 
                      style={{ maxWidth: '580px' }} 
                    />
                  </div>
                )}
              </Col>
            </Row>
          </div>
          
          
        </div>
      </Container>
    </section>
  );
};

export default CTAHome;
