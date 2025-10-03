// src/screens/PricingPage/PricingPage.jsx

import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import this page's specific CSS
import './PricingPage.css';

// Import all necessary assets
import logo from '../../assets/images/logo.svg';
import iconSchedule from '../../assets/icons/icon-schedule.svg';
import iconBilling from '../../assets/icons/icon-billing.svg';
// Reuse icons from "Our Approach" for the new "How It Works"
import approachAssessment from '../../assets/icons/icon-assess.svg';
import approachPlans from '../../assets/icons/icon-plans.svg';
import approachQuality from '../../assets/icons/icon-quality.svg';
import approachFlexibility from '../../assets/icons/icon-flexibility.svg';
import arrowSeparator from '../../assets/icons/arrow-separator.svg';

// Import reusable components
import PageHero from '../../components/ui/PageHero';
import HowItWorksSection from '../../components/ui/HowItWorksSection';

const howItWorksData = [
    { icon: approachAssessment, title: 'Free Trial', description: <>Your first class is <strong>free</strong>.</> },
    { icon: approachPlans, title: 'Select Your Schedule', description: <><strong>Choose</strong> the number of classes per week.</> },
    { icon: approachQuality, title: 'Monthly Payment', description: <>Pay in <strong>advance</strong> each month.</> },
    { icon: approachFlexibility, title: 'Cancellation', description: <>Cancel <strong>anytime</strong> with 2 weeks' notice.</> },
];

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
    {/* SEO for pricing-page */}
      <Helmet>
        <title>TutorExel Pricing | Flexible Tutoring Packages for Students</title>
        <meta
          name="description"
          content="Discover TutorExel’s flexible tutoring prices in Australia. We provide clear packages for all subjects, supporting primary & secondary learning needs. Visit now!"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="TutorExel Pricing | Flexible Tutoring Packages for Students" />
        <meta property="og:description" content="Discover TutorExel’s flexible tutoring prices in Australia. We provide clear packages for all subjects, supporting primary & secondary learning needs. Visit now!" />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tutorexel.com/pricing" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TutorExel",
            "url": "https://www.tutorexel.com",
            "logo": "https://www.tutorexel.com/assets/images/logo.svg",
            "sameAs": [
              "https://www.facebook.com/share/1Za9NLXEqM/",  
              "https://www.instagram.com/tutorexellearning", 
            ]
          })}
        </script>
      </Helmet>
      <PageHero title="Pricing" />
      <section className="py-5 bg-white">
        <Container>
          <Row className="">
            <Col lg={11}>
              <h2 className="section-heading"></h2>
              <p className="page-intro mt-3 text-secondary">
                Every family begins with a free trial class so you can experience Tutorexel with no commitment. After your trial, you can choose either One-to-One Tutoring or Group Classes. All sessions are 1 hour. Payments are billed monthly in advance. Cancel anytime with 2 weeks' notice.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Main Pricing Block */}
      <section className="pb-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={4} className="d-flex flex-column">
              <h3 className="section-heading mb-4">Simple, Transparent Pricing</h3>
              <div className="d-flex flex-column justify-content-center flex-grow-1">
                <div className="pricing-feature-item">
                  <img src={iconSchedule} alt="Schedule Icon" />
                  <div className="feature-text">
                    <h5>Schedule</h5>
                    <p className="text-secondary mb-0">Flexible - select your preferred number of sessions per week</p>
                  </div>
                </div>
                <div className="pricing-feature-item">
                  <img src={iconBilling} alt="Billing Icon" />
                  <div className="feature-text">
                    <h5>Billing</h5>
                    <p className="text-secondary mb-0">Monthly in advance</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row className="g-4 h-100">
                <Col md={6}>
                  <div className="pricing-card one-to-one">
                    <h3>One-to-One Tutoring</h3>
                    <p>Personalised, dedicated support.</p>
                    <div className="price-amount">$21 AUD</div>
                    <p className="price-per-class">per class</p>
                    <Link to="/contact" className="btn btn-main"><FaArrowRight /> Get Started</Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="pricing-card group-classes">
                    <h3>Group Classes</h3>
                    <p>Collaborative small-group learning.</p>
                    <div className="price-amount">$12 AUD</div>
                    <p className="price-per-class">per class</p>
                     <Link to="/contact" className="btn "><FaArrowRight /> Get Started</Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <div className='pt-5'>
        <HowItWorksSection
          headingText="How It Works"
          stepsData={howItWorksData}
          arrowIcon={arrowSeparator}
          showButton={true}
          buttonText="Book Your Free Trial Class"
          buttonIcon={<FaArrowRight />}
        />
      </div>
    </main>
  );
};

export default PricingPage;
