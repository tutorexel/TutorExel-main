// src/components/SubjectCard.jsx

import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import './ui.css';

const SubjectCard = ({
  icon,
  title = 'Subject Title',
  description,
  linkText = 'Learn more',
  linkHref = '#',
}) => {
  return (
    // Add text-start class to the Card component to align all text to the left
    <Card className="h-100 shadow-sm p-4 text-start subject-card">
      <Card.Body className="d-flex flex-column">
        {/* The icon is already aligned left by default block behavior */}
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="mb-4" 
          style={{ width: '60px', height: '60px' }} 
        />
        <Card.Title as="h4" className="fw-bold text-dark-navy">{title}</Card.Title>
        <Card.Text className="text-secondary mt-2 mb-4">
          {description}
        </Card.Text>
        {/* Use align-self-start to ensure the link aligns to the left in the flex container */}
        <p className="fw-semibold text-primary-blue d-inline-flex align-items-center gap-2 mt-auto">
          {linkText} <FaArrowRight />
        </p>
      </Card.Body>
    </Card>
  );
};

export default SubjectCard;