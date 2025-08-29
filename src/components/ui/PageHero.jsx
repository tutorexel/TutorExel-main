// src/components/ui/PageHero.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import './ui.css'; // 1. Ensure the component's stylesheet is imported

/**
 * A reusable hero banner for page titles.
 *
 * @param {object} props The component props.
 * @param {string} props.title The main title to display on the banner.
 * @param {string} [props.titleSize='display-3'] The Bootstrap display class for the title's font size.
 */
const PageHero = ({
  title,
  titleSize = 'display-3', // Default to the larger size
}) => {
  return (
    // 2. Use the new hardcoded CSS class. No more props for styling.
    <section className="page-hero-banner">
      <Container>
        <div className="text-center">
          <h1 className={`${titleSize} fw-bolder text-dark-navy`}>{title}</h1>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;