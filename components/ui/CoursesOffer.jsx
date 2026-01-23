"use client";
import Link from "next/link";
import { Container, Row, Col, Card } from 'react-bootstrap';
import CourseCard from './CourseCard';

const CoursesOffer = ({
  headingText,
  description,
  cardsData = [],
  customStyles = {},
  length = '3'
}) => {
  return (
    // Ensure the className is set to "why-trust-section"
    <section className="py-5 subjects-section">
        <Container>
          <div className="text-center">
            <h2 className="section-heading">{headingText}</h2>
            <p className="lead text-secondary mx-auto mt-3" style={{ maxWidth: '700px' }}>
              {description}
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="horizontal-scroll-container row gx-4 gy-4">
            {cardsData.map((subject, index) => (
              <Col md={3} lg={3} xl={3} key={index} className="flex-shrink-0">
                {subject.isComingSoon ? (
                  // For coming soon subjects, use div with click handler
                  <div 
                    className="text-decoration-none d-block h-100" 
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handleSubjectClick(subject, e)}
                  >
                    <CourseCard
                      icon={subject.icon}
                      title={subject.title}
                      description={subject.description}
                    />
                  </div>
                ) : (
                  // For available subjects, use Link as before
                  <Link href={subject.link} className="text-decoration-none d-block h-100">
                    <CourseCard
                      icon={subject.icon}
                      title={subject.title}
                      description={subject.description}
                    />
                  </Link>
                )}
              </Col>
            ))}
          </div>
        </Container>
      </section>
  );
};

export default CoursesOffer;