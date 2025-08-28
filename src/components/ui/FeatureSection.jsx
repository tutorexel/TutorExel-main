// src/components/FeatureSection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import checkmarkIcon from '../../assets/icons/checkmark-icon.svg'; // Reusing the checkmark icon

/**
 * A reusable component for a two-column layout featuring an image and text content.
 *
 * @param {object} props The component props.
 * @param {'left'|'right'} [props.imagePosition='left'] The position of the image relative to the text.
 * @param {string} props.image The source URL for the image.
 * @param {string} [props.imageAlt='Feature image'] The alt text for the image.
 * @param {string} props.headingText The main heading text.
 * @param {React.ReactNode} props.descriptionText The paragraph text, can include HTML/JSX for formatting.
 * @param {Array<{text: string, bold: string}>} [props.features=[]] An array of features for the bulleted list.
 * @param {boolean} [props.showButton=true] Whether to show the call-to-action button.
 * @param {string} [props.buttonText='Learn More'] The text for the button.
 * @param {React.CSSProperties} [props.customStyles={}] Custom inline styles to apply to the section container.
 */
const FeatureSection = ({
  imagePosition = 'left',
  image,
  imageAlt = 'Feature image',
  headingText,
  descriptionText,
  features = [],
  showButton = true,
  buttonText = 'Learn More',
  customStyles = {},
}) => {

  // Define the Image and Text columns as variables for cleaner conditional rendering
  const ImageColumn = (
    <Col lg={6}>
      <img
        src={image}
        alt={imageAlt}
        className="img-fluid w-100"
        style={{ borderRadius: '40px' }}
      />
    </Col>
  );

  const TextColumn = (
    <Col lg={6}>
      <h2 className="fw-bolder" style={{ fontSize: '2.6rem', lineHeight: '1.3' }}>
        {headingText}
      </h2>
      <div className="text-secondary mt-3 mb-4 fs-5">
        {descriptionText}
      </div>
      
      <div className="d-grid gap-3">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="feature-item" style={{ borderRadius: '10px' }}>
              <img src={checkmarkIcon} alt="Checkmark" style={{ width: '28px', height: '28px' }} />
              <span>
                {feature.text}<strong>{feature.bold}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {showButton && (
        <Link to="/contact" variant="primary-orange" size="sm" className="mt-4 d-inline-flex align-items-center main-btn1">
          {buttonText} <FaArrowRight className="ms-2" />
        </Link>
      )}
    </Col>
  );

  return (
    // The main section applies custom styles over a base padding
    <section className="bg-white" style={{ padding: '80px 0', ...customStyles }}>
      <Container>
        <Row className="align-items-center g-5">
          {/* Conditionally render columns based on the imagePosition prop */}
          {imagePosition === 'left' ? (
            <>
              {ImageColumn}
              {TextColumn}
            </>
          ) : (
            <>
              {TextColumn}
              {ImageColumn}
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
