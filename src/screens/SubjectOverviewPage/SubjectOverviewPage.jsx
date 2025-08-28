// src/screens/SubjectOverviewPage/SubjectOverviewPage.jsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import { subjectOverviews, subjectsData } from '../../data/subjectsData';

import PageHero from '../../components/ui/PageHero';
import CTASection from '../../components/ui/CTASection';

import './SubjectOverviewPage.css';

const SubjectOverviewPage = () => {
  const { subjectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subjectKeyMap = {
    mathematics: 'maths',
  };
  const dataKey = subjectKeyMap[subjectId] || subjectId;
  const overviewContent = subjectOverviews[subjectId];
  const availableYears = Object.entries(subjectsData)
    .map(([year, subjects]) => {
      if (subjects[dataKey]) {
        return { year, data: subjects[dataKey] };
      }
      return null;
    })
    .filter(Boolean);

  if (!overviewContent) {
    return <PageHero title="Subject Not Found" />;
  }

  return (
    <main>
      <PageHero title={overviewContent.pageTitle} />

      {/* --- Top Text Block --- */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="">
            <Col lg={12} className="">
              <h2 className="fw-bolder">Subjects We Offer</h2>
              <p className="lead text-secondary mt-3">{overviewContent.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Grid of Year Cards --- */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bolder mb-5">{overviewContent.heading}</h2>
          <Row className="g-4">
            {availableYears.length > 0 ? (
              availableYears.map(({ year, data }) => (
                <Col lg={4} md={6} key={year}>
                  {/* Reusing the sidebar layout for the "Year Card" */}
                  <div className="sidebar-card h-100 d-flex flex-column">
                    <h4>{data.sidebar.title}</h4>
                    <p className="text-secondary">{data.sidebar.subtitle}</p>
                  

                    {/* Removed thin separator line */}
                    <h5 className="fw-bold mt-3">Key Areas Covered</h5>
                    <ul className="text-secondary">
                      {data.sidebar.keyAreas.map(area => <li key={area}>{area}</li>)}
                    </ul>
                    <Link to={`/subjects/${year}/${dataKey}`} className="btn btn-primary-orange w-100">
                      Click to learn more <FaArrowRight />
                    </Link>
                  </div>
                </Col>
              ))
            ) : (
              <Col className="text-center text-secondary">
                <p>Curriculum details for this subject are coming soon.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      <CTASection
        headingText="Ready to Get Started?"
        image={""} // Hide image for subject pages
        primaryButtonText="Book Your Free Trial Class"
        primaryButtonIcon={<FaArrowRight />}
        secondaryButtonText="Contact Us to Learn More"
        secondaryButtonIcon={<FaArrowRight />}
      />
    </main>
  );
};

export default SubjectOverviewPage;