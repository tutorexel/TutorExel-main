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
    // Center content and justify description per request
    <Card className="h-100 shadow-sm p-4 text-center subject-card">
      <Card.Body className="d-flex flex-column align-items-center">
        {/* Centered icon */}
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="mb-4 mx-auto d-block" 
          style={{ width: '60px', height: '60px' }} 
        />
        {/* Centered title */}
        <Card.Title as="h4" className=" text-dark-navy">{title}</Card.Title>
        {/* Centered description without full justification to avoid awkward gaps */}
        <Card.Text className="text-secondary mt-2 mb-4 text-center">
          {description}
        </Card.Text>
        {/* Centered link at bottom */}
        <p className="fw-semibold text-primary-blue d-inline-flex align-items-center justify-content-center gap-2 mt-auto">
          {linkText} <FaArrowRight />
        </p>
      </Card.Body>
    </Card>
  );
};

export default SubjectCard;