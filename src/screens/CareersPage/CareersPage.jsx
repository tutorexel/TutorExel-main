// src/screens/CareersPage/CareersPage.jsx

import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// Import this page's specific CSS
import './CareersPage.css';

// Import all necessary assets
import logo from '../../assets/images/logo.svg';
import teacherMagnifyingGlass from '../../assets/images/teacher-magnifying-glass.png';
import teacherOkBlueBg from '../../assets/images/teacher-ok.png';
import iconFlexibleHours from '../../assets/icons/icon-flexible-hours.svg';
import iconTeachAnywhere from '../../assets/icons/icon-teach-anywhere.svg';
import iconPreStructured from '../../assets/icons/icon-pre-structured.svg';
import iconPurposeDriven from '../../assets/icons/icon-purpose-driven.svg';
import iconApplyClick from '../../assets/icons/icon-apply-click.svg';
import iconApplyUpload from '../../assets/icons/icon-apply-upload.svg';
import iconApplyContact from '../../assets/icons/icon-apply-contact.svg';
import iconTeamLogo from '../../assets/icons/icon-team-logo.svg';
import arrowSeparator from '../../assets/icons/arrow-separator.svg';

// Import all reusable components
import PageHero from '../../components/ui/PageHero';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import ContentBanner from '../../components/ui/ContentBanner';
import HowItWorksSection from '../../components/ui/HowItWorksSection';

// Define data for the reusable components
const whatWeLookForFeatures = [
    { text: "Bachelor's degree in Education or relevant subject", bold: "" },
    { text: "Teaching or tutoring experience with school-aged children", bold: "" },
    { text: "Strong communication skills in English", bold: "" },
    { text: "Comfortable using Zoom or Google Meet for live sessions", bold: "" },
];

const whyJoinCards = [
    { icon: iconFlexibleHours, title: 'Flexible hours', description: 'choose time slots that work for you' },
    { icon: iconTeachAnywhere, title: 'Teach from anywhere', description: 'with full tech and admin support' },
    { icon: iconPreStructured, title: 'Pre-structured content', description: 'and student progress tools provided' },
    { icon: iconPurposeDriven, title: 'Be part of a purpose-driven,', description: 'educator-first team' },
];

const howToApplySteps = [
    { icon: iconApplyClick, title: '', description: 'Click the button below to fill out the application form' },
    { icon: iconApplyUpload, title: '', description: <>Upload your <strong>CV</strong> and a <strong>1-minute video</strong> introducing yourself</> },
    { icon: iconApplyContact, title: '', description: <>We'll get in touch within <strong>3-5 business days</strong> if shortlisted</> },
];


const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* SEO for career-page */}
      <Helmet>
        <title>Careers at TutorExel | Join Our Online Tutoring Team</title>
        <meta
          name="description"
          content="Explore careers with TutorExel & join our online tutoring team. We’re hiring passionate educators across Australia to deliver curriculum-aligned learning support."
        />
      </Helmet>

      {/* Section 1: Hero Banner */}
      <PageHero title="Careers" />

      {/* Section 2: Careers at TutorExel Intro */}
      <section className="py-5 bg-white">
        <Container>
            <Col lg={11} className="">
          
              <h4 className="fw-bold mt-3" style={{fontWeight: '700'}}>Make a Real Impact - From Anywhere</h4>
              <p className="mt-3 page-intro text-secondary">At Tutorexel, we're on a mission to redefine online tutoring for school students by combining academic rigour with personalised care. If you're passionate about education and want the freedom to work from anywhere, join our growing team of expert educators.</p>
            </Col>
        </Container>
      </section>

      {/* Section 3: Current Openings */}
      <section className="">
        <Container>
          {/* Use a single container column for the section's content */}
          <Col lg={11} className="">
            <h2 className="section-heading mb-4">Current Openings</h2>
            <h4 className="fw-bold">Online Tutors – All Subjects (Years 2-10)</h4>
            <p className="text-secondary">We are currently hiring for:</p>
            
            {/* This Row is now the direct container for the two columns */}
            <Row className="mt-4">
              {/* Column 1: Subjects List */}
              <Col md={6} className="current-openings-col">
                <ul className="list-unstyled subjects-list-distributed openings-subjects">
                  <li>• Mathematics</li>
                  <li>• Science</li>
                  <li>• English</li>
                  <li>• Hindi</li>
                </ul>
              </Col>
              
              {/* Column 2: Job Details List */}
              <Col md={6} className="current-openings-col">
                {/* Use a simple div, no more box class */}
                <div className="openings-details">
                  {/* Wrap each detail in a div with the new class */}
                  <div className="detail-item">
                    <dt>Job Type:</dt>
                    <dd>Freelance / Part-time</dd>
                  </div>
                  <div className="detail-item">
                    <dt>Work Mode:</dt>
                    <dd>Online (Remote)</dd>
                  </div>
                  <div className="detail-item">
                    <dt>Time Zones:</dt>
                    <dd>Classes follow Australian time zone</dd>
                  </div>
                  <div className="detail-item">
                    <dt>Location:</dt>
                    <dd>Open globally (Indian educators preferred)</dd>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>

      {/* Section 4: What We Look For */}
      <FeatureSection
        imagePosition="right"
        image={teacherMagnifyingGlass}
        headingText="What We Look For"
        features={whatWeLookForFeatures}
        showButton={false}
      />
      
      {/* Section 5: Why Join Tutorexel? */}
      <TrustSection
        headingText="Why Join Tutorexel?"
        cardsData={whyJoinCards}
      />
      
      {/* Section 6: What You'll Do */}
      <ContentBanner
        image={teacherOkBlueBg}
        imagePosition="left"
        backgroundColor="#22A3D2"
        content={
          <div className="text-white">
            <h2 className="section-heading text-white">What You'll Do</h2>
            <ul className="fs-5 ps-3 mt-4">
              <li>Deliver live, engaging sessions aligned to the Australian Curriculum</li>
              <li>Follow personalised student learning plans</li>
              <li>Share brief session notes after each class</li>
              <li>Collaborate on monthly student progress reports</li>
            </ul>
          </div>
        }
      />
      
      {/* Section 7: How to Apply */}
      <HowItWorksSection
        headingText="How to Apply"
        stepsData={howToApplySteps}
        arrowIcon={arrowSeparator}
        showButton={true}
        buttonText="Apply Now"
        buttonIcon={<FaArrowRight />}
        buttonLink="/contact/careers"
      />
      
      {/* Section 8: Life at Tutorexel */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center section-heading mb-5">Life at Tutorexel</h2>
          <div className="life-quote-card">
            <h3 className="fw-normal p-4" style={{color: 'white', textAlign: 'center'}}>"We're building a team of educators who genuinely care. At Tutorexel, you get the support and flexibility you need to do your best work."</h3>
          </div>
          <div className="text-center mt-4 d-flex align-items-center justify-content-center gap-3">
            <Image src={iconTeamLogo} alt="Team logo" className=""  />
            {/* <span className="fw-bold fs-5">Team TutorExel</span> */}
          </div>
        </Container>
      </section>

    </main>
  );
};

export default CareersPage;
