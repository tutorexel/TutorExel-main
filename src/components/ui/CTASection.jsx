// src/components/ui/CTASection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/images/placeholder.jpg';

/**
 * A reusable Call-to-Action section with an overflowing image.
 *
 * ... (all other props documentation) ...
 * @param {string} [props.primaryButtonTextColor] The text color for the primary (white) button.
 * @param {string} [props.secondaryButtonTextColor] The text color for the secondary (blue) button.
 */
const CTASection = ({
  headingText = 'Ready to Get Started?',
  image = defaultImage,
  imageAlt = '',
  primaryButtonText = 'Primary Action',
  secondaryButtonText = 'Secondary Action',
  primaryButtonIcon,
  secondaryButtonIcon = <FaArrowRight />,
  primaryButtonTextColor,
  secondaryButtonTextColor,
  customStyles = {},
  openPopup,
}) => {
  return (
    <section className="bg-white" style={{ paddingTop: '10px', paddingBottom: '10px', ...customStyles }}>
      <Container>
        <div className="position-relative">
          <div className="bg-primary-orange-gradient p-5 rounded-4 overflow-hidden" style={{ minHeight: '230px'}}>
            <Row className="align-items-center text-align-center">
              <Col lg={12}>
                <h2 className="section-heading text-white text-center">
                  {headingText}
                </h2>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4 text-center justify-content-center">
                  <Button onClick={openPopup} 
                    className="main-btn" 
                    style={{ color: primaryButtonTextColor }}
                  >
                    {primaryButtonText} {primaryButtonIcon && <span className="ms-2">{primaryButtonIcon}</span>}
                  </Button>
                  
                  <Link to="/contact" className="main-btn-b"
                    variant="secondary-blue"
                    style={{ color: secondaryButtonTextColor }}
                  >
                    {secondaryButtonText} {secondaryButtonIcon && <span className="ms-2">{secondaryButtonIcon}</span>}
                  </Link>
                </div>
              </Col>
              {/* <Col lg={5} className="d-none d-lg-block"></Col> */}
            </Row>
          </div>
          
          {image && (
            <div className="d-none d-lg-block position-absolute" style={{ bottom: 5, right: '0px', zIndex: 1 }}>
              <img 
                src={image} 
                alt={imageAlt} 
                style={{ width: '100%', maxWidth: '580px' }} 
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
