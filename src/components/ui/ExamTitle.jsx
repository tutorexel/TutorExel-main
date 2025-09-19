// src/components/ui/PageHero.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ui.css'; // 1. Ensure the component's stylesheet is imported

/**
 * A reusable hero banner for page titles.
 *
 * @param {object} props The component props.
 * @param {string} props.title The main title to display on the banner.
 * @param {string} [props.titleSize='display-3'] The Bootstrap display class for the title's font size.
 */
const ExamTitle = ({
  title,
  titleSize = 'display-3', // Default to the larger size
  description,
  showButton = false,
  buttonText = 'Learn More',
  customClass
}) => {
  // Create mobile-friendly title by breaking at natural points
  const createMobileFriendlyTitle = (title) => {
    // For subject page titles, break after the dash for better mobile display
    if (title.includes(' – ')) {
      const parts = title.split(' – ');
      return (
        <>
          {parts[0]} <br className="d-md-none" />
          <span className="d-none d-md-inline"> </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    // 2. Use the new hardcoded CSS class. No more props for styling.
    <section className={`page-hero-banner ${customClass}`}>
      <Container>
        <div className="">
          <h1 className={`${titleSize} fw-bolder text-dark-navy`}>
            {createMobileFriendlyTitle(title)}
          </h1>
          {description && (
            <p className="lead text-secondary mt-3">
              {description}
            </p>
          )}
          {showButton && (
            <Link to="/contact" variant="primary-orange" size="sm" className="mt-4 d-inline-flex align-items-center main-btn1 mx-lg-0 mx-auto">
              {buttonText} <FaArrowRight className="ms-2" />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ExamTitle;