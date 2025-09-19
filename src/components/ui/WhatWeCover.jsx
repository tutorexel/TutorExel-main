// src/components/WhatWeCover.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arrowSeparatorDesktop from '../../assets/icons/arrow-separator.svg';
import arrowSeparatorMobile from '../../assets/icons/arrow-separator-bottom.svg';
import './HowItWorksSection.css';

/**
 * A reusable component for displaying a step-by-step process.
 *
 * @param {object} props The component props.
 * @param {string} [props.headingText='How It Works'] The main title of the section.
 * @param {Array<{icon: string, title: string, description: string}>} [props.stepsData=[]] Data for each step.
 * @param {boolean} [props.showButton=true] Whether to show the final button.
 * @param {string} [props.buttonText='Get Started'] The text for the button.
 * @param {string} [props.backgroundClass='hero-section-bg'] The CSS class for the section's background.
 * @param {React.ReactNode} [props.buttonIcon] An optional icon component to display in the button.
 * * @param {string} [props.buttonLink] An optional internal route for the button (e.g., '/contact/careers').
 */
const WhatWeCover = ({
  headingText = 'What We Cover',
  stepsData = [],
  backgroundClass = 'hero-section-bg',
  layout = '3'
}) => {

  return (
    <section className={`${backgroundClass} hiw-wrapper`}>
      <Container>
        <div className="text-center">
          <h2 className="section-heading hiw-title">{headingText}</h2>
        </div>

        <div className="hiw-card mt-5">
          <Row className="mt-2 justify-content-between align-items-center">
            {stepsData.map((step, index) => (
              <React.Fragment key={index}>
                <Col lg={layout} md={6} className="text-center hiw-step">
                  <img 
                    src={step.icon} 
                    alt={`${step.title} icon`} 
                    className="mb-3" 
                  />
                  <h4 className="fw-bold">{step.title}</h4>
                  <p className="text-secondary">{step.description}</p>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeCover;