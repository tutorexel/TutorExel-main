// src/components/ContentBanner.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * A versatile, reusable content banner component.
 *
 * @param {object} props The component props.
 * @param {string} [props.image] The source for the image part of the banner.
 * @param {string} [props.imageAlt=''] The alt text for the image.
 * @param {'left'|'right'} [props.imagePosition='left'] Position of the image relative to the content.
 * @param {React.ReactNode} [props.content] The main content to display (e.g., text, JSX).
 * @param {string} [props.backgroundColor='var(--primary-orange-gradient)'] The background for the content area.
 * @param {string} [props.className=''] Additional classes for the main section.
 * @param {React.CSSProperties} [props.customStyles={}] Custom inline styles for the main section.
 */
const ContentBanner = ({
  image,
  imageAlt = '',
  imagePosition = 'left',
  content,
  backgroundColor = '#FF9E10',
  className = '',
  customStyles = {},
}) => {
  const imageColSize = image && content ? 6 : 12;
  const contentColSize = image && content ? 6 : 12;

  const contentStyles = {
    background: backgroundColor,
  };

  const ImageColumn = image ? (
    <Col md={imageColSize}>
      <img src={image} alt={imageAlt} className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
    </Col>
  ) : null;

  const ContentColumn = content ? (
    <Col md={contentColSize} className="d-flex align-items-center p-5" style={contentStyles}>
      {content}
    </Col>
  ) : null;

  return (
    <section className={`py-5 ${className}`} style={customStyles}>
      <Container>
        <Row className="g-0 rounded-4 overflow-hidden shadow-lg">
          {imagePosition === 'left' ? (
            <>
              {ImageColumn}
              {ContentColumn}
            </>
          ) : (
            <>
              {ContentColumn}
              {ImageColumn}
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ContentBanner;