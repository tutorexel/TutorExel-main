// src/components/ui/PageHero.jsx

"use client";
import { Container } from 'react-bootstrap';

const PageHero = ({
  title,
  titleSize = 'display-3', // Default to the larger size
}) => {
  // Create mobile-friendly title by breaking at natural points
  const createMobileFriendlyTitle = (title) => {
    // For subject page titles, break after the dash for better mobile display
    if (title.includes(' – ')) {
      const parts = title.split(' – ');
      return (
        <>
          {parts[0]} –<br className="d-md-none" />
          <span className="d-none d-md-inline"> </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    // 2. Use the new hardcoded CSS class. No more props for styling.
    <section className="page-hero-banner">
      <Container>
        <div className="text-center">
          <h1 className={`${titleSize} fw-bolder text-dark-navy`}>
            {createMobileFriendlyTitle(title)}
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;