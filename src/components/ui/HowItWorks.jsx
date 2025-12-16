import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arrowSeparatorDesktop from '../../assets/icons/arrow-separator.svg';
import arrowSeparatorMobile from '../../assets/icons/arrow-separator-bottom.svg';
import './HowItWorks.css';


const HowItWorksSection = ({
  headingText = 'How It Works',
  stepsData = [],
  showButton = false,
  buttonText = 'Get Started',
  backgroundClass = 'hero-section-bg',
  buttonIcon,
  buttonLink
}) => {
  const ActionButton = (
    <Button variant="primary-orange" size="lg" className="d-inline-flex align-items-center">
      {buttonText} {buttonIcon && <span className="ms-2">{buttonIcon}</span>}
    </Button>
  );
  return (
    <section className={`${backgroundClass} hiw-wrapper`}>
      <Container>
        <div className="text-center">
          <h2 className="section-heading hiw-title">{headingText}</h2>
        </div>

        <div className="hiw-card mt-5">
          <Row className="mt-2 g-4 justify-content-between align-items-center">
            {stepsData.map((step, index) => (
              <React.Fragment key={index}>
                <Col lg={2} md={6} className="text-center hiw-step">
                  <img 
                    src={step.icon} 
                    alt={`${step.title} icon`} 
                    className="mb-3" 
                  />
                  <h4 className="fw-bold">{step.title}</h4>
                  <p className="text-secondary">{step.description}</p>
                </Col>

                {index < stepsData.length - 1 && (
                  <Col lg="auto" className="d-flex align-items-center justify-content-center hiw-arrow">
                    {/* Desktop arrow */}
                    <img 
                      src={arrowSeparatorDesktop} 
                      alt="arrow separator desktop" 
                      className="d-none d-lg-block"
                    />
                    {/* Mobile arrow */}
                    <img 
                      src={arrowSeparatorMobile} 
                      alt="arrow separator mobile" 
                      className="d-block d-lg-none"
                    />
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
        </div>

        {showButton && (
          <div className="text-center mt-5">
            <Link to={buttonLink || "/contact"}>
              {ActionButton}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default HowItWorksSection;