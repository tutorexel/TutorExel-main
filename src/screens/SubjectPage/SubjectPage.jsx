// src/screens/SubjectPage/SubjectPage.jsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import seoData from '../../seo/seoData';
import logo from '../../assets/images/logo.svg';
import { subjectsData } from '../../data/subjectsData';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

import './SubjectPage.css'; // Import this page's CSS
import resultsTrophy from '../../assets/images/results-trophy.png';
import progressBoy from '../../assets/images/progress-boy.png';

import PageHero from '../../components/ui/PageHero';
import FeatureSection from '../../components/ui/FeatureSection';

const SubjectPage = () => {
  const { yearId, subjectId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [yearId, subjectId]);

  const subjectContent = subjectsData[yearId]?.[subjectId.toLowerCase()];

  if (!subjectContent) {
    return (
      <main>
        <PageHero title="Subject Not Found" />
        <Container className="py-5 text-center">
          <p className="lead">Sorry, we couldn't find content for this subject yet.</p>
        </Container>
      </main>
    );
  }

  const key = `${yearId}-${subjectId.toLowerCase()}`;
  const meta = seoData[key] || {
    title: `${subjectContent.pageTitle} | TutorExel`,
    description: "Expert online tutoring with TutorExel."
  };

  const formattedYear = yearId
    ? `Year ${yearId.replace('year-', '')}`
    : 'program';

  const deliveryFeatures = [
      { text: "Live sessions on Zoom/Google Meet with ", bold: "Guidance (1-on-1 or group)" },
      { text: "Shared content plan visible to  ", bold: "Parents and Tutors" },
      { text: "Practice worksheets and revision tests  ", bold: "Every Month" },
      { text: "Detailed progress reports  ", bold: "Every 4 Weeks" },
  ];

  const featureSectionTitle = {
    "year-2-maths" : "How Learning Is Delivered – Year 2 Maths Tutoring Online",
    "default" : "How Learning is Delivered"
  };
  const featureSectionDesc = {
    "year-2-maths" : "In our Year 2 maths tutoring program aligned with the Australian Curriculum, every 4 weeks you’ll receive a clear progress report outlining:",
    "default" : "Every 4 weeks, you’ll receive a clear progress report outlining:"
  };
  const featureSectionDesc2 = {
    "year-2-maths" : "A convenient option for families seeking a reliable year 2 maths online tutor.",
    "default" : ""
  };
  const designResults = {
    "year-2-maths" : "Whether your child needs help catching up or wants to move ahead, our Year 2 program is structured to support every learning goal. Parents often find us when searching for year 2 maths tutoring and the best year 2 maths tutor Australia, because our teaching stays tightly aligned to Australian Curriculum Maths Year 2.",
    "default" : <>Whether your child needs help catching up or wants to move ahead, our {formattedYear} program is structured to support every learning goal.</>
  };

  const headingText = featureSectionTitle[key] || featureSectionTitle["default"];
  const descText = featureSectionDesc[key] || featureSectionDesc["default"];
  const beforeBtnText = featureSectionDesc2[key] || featureSectionDesc2["default"];
  const designDesc = designResults[key] || designResults["default"];

  // FAQ Schema
  const faqSchema = subjectContent.faqData && {
    "@context": "https://schema.org",
    "@type": "SubjectsPage",
    "mainEntity": subjectContent.faqData.map(faq => ({
      "@type": "Question",
      "name": faq.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.content
      }
    }))
  };

  return (
    <main>

      {/* SEO Helmet */}
      <Helmet prioritizeSeoTags>
        <title key="title">{meta.title}</title>
        <meta name="description" content={meta.description} key="description" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />

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
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Helmet>

      <PageHero title={subjectContent.pageTitle} titleSize="display-5"/>

      {/* --- Intro Section --- */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-5">
             <Col lg={8} className="d-flex flex-column justify-content-center">
              <h2 className="section-heading">{subjectContent.introHeading}</h2>
              <p className="text-secondary mt-3 page-intro">{subjectContent.introP1}</p>
              <p 
                className="text-secondary page-intro" 
                dangerouslySetInnerHTML={{ __html: subjectContent.introP2 }} 
              />
              
              <h3 className="section-heading mt-5">{subjectContent.learningHeading}</h3>
              <p className="text-secondary mt-3 page-intro">{subjectContent.learningP1}</p>
            </Col>

            <Col lg={4}>
              <div className="sidebar-card">
                <h4>{subjectContent.sidebar.title}</h4>
                <p className="text-secondary">{subjectContent.sidebar.subtitle}</p>
                <Button as={Link} to={subjectContent.sidebar.buttonLink || "/contact"} variant="primary-orange" className="btn-primary-orange w-100">
                  {subjectContent.sidebar.buttonText} <FaArrowRight />
                </Button>
                {/* Removed thin separator line */}
                <h5 className="fw-bold mt-3">Key Areas Covered</h5>
                <ul className="">
                  {subjectContent.sidebar.keyAreas.map(area => <li key={area}>{area}</li>)}
                </ul>
                {subjectContent.sidebar.description && (
                  <p className='text-secondary'>{subjectContent.sidebar.description}</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Course Content Section --- */}
      <section className="py-2 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="course-content-section">
                <h2 className="text-center section-heading">{subjectContent.courseContent.heading}</h2>
                <hr className="my-4" />
                <Row>
                  {subjectContent.courseContent.topics.map(topic => (
                    <Col md={6} key={topic.title}>
                      <div className="topic-block" key={topic.title}>
                        <h4>{topic.title}</h4>
                        <ul className="text-secondary">
                          {topic.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                        {topic.description && (
                          <p className='text-secondary'>{topic.description}</p>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* --- How Learning is Delivered Section --- */}
      <FeatureSection
        imagePosition="right"
        image={progressBoy}
        imageAlt="Happy student showing progress"
        headingText={headingText}
        descriptionText={descText}
        features={deliveryFeatures}
        beforeButton = {beforeBtnText}
        buttonText="Contact Us"
        customStyles={{ backgroundColor: '#FFFFFF' }} // Ensure background is white
      />
      
      {/* --- Designed for Results Section --- */}
      <section className="py-5 bg-white"> {/* Removed bg-light-gray */}
        <Container>
          <div className="results-banner">
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="section-heading">Designed for Results</h2>
                {/* The year is now dynamically inserted into the hardcoded text */}
                <p className="fs-8 mt-3 fw-normal">
                  {designDesc}
                </p>
                
                {/* Vertically stacked CTAs */}
                <div className="d-flex flex-column align-items-start gap-3 mt-4">
                  <Button as={Link} to="/contact" className="btn-white-custom" style={{ color: 'black',fontSize: '1.2rem' }}>
                    Book Your Free Trial Class <FaArrowRight />
                  </Button>

                  <div className="d-flex flex-column align-items-center gap-3">
                    <a href="https://wa.me/919872550572" className="call-link">
                      <FaPhoneAlt /> Call or WhatsApp
                    </a>
                   
                  </div>
                </div>
              </Col>
              
              {/* The image is now outside the column for absolute positioning */}
            </Row>
            {/* The overflowing image */}
            <div className="d-none d-lg-block z-index-1">
              <img 
                src={resultsTrophy} 
                alt="Trophy for results" 
                className="position-absolute"
                style={{ 
                  width: '100%', 
                  maxWidth: '480px', 
                  right: '20px', 
                  bottom: '-40px' /* This makes it overflow */
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {subjectContent.faqData && (
        <section className="faq">
            <Container className="my-5">
                <row className="mt-3">
                    <h2 className="section-heading text-center mb-5">FAQs</h2>
                    <Accordion>
                        {subjectContent.faqData.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.title}</Accordion.Header>
                            <Accordion.Body>{faq.content}</Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </row>
            </Container>
        </section>
      )}

    </main>
  );
};

export default SubjectPage;
