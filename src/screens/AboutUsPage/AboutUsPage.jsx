// src/screens/AboutUsPage/AboutUsPage.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// 1. Import local CSS for this page
import './AboutUsPage.css';

// 2. Import all necessary assets
import logo from '../../assets/images/logo.svg';
import missionTeacher from '../../assets/images/mission-teacher.png';
import differenceTeacher from '../../assets/images/difference-teacher.png';
// import ctaFamily from '../../assets/images/cta-family.png';
import iconAssess from '../../assets/icons/icon-assess.svg';
import approachPlans from '../../assets/icons/icon-plans.svg';
import approachQuality from '../../assets/icons/icon-quality.svg';
import approachFlexibility from '../../assets/icons/icon-flexibility.svg';

// 3. Import all reusable components
import PageHero from '../../components/ui/PageHero';
import ContentBanner from '../../components/ui/ContentBanner';
import FeatureSection from '../../components/ui/FeatureSection';
import HowItWorksSection from '../../components/ui/HowItWorksSection';
import CTASection from '../../components/ui/CTASection';
import { FaArrowRight } from 'react-icons/fa';

const differenceFeatures = [
    { text: 'We hire and train our own educators - ', bold: 'so you can be sure every teacher meets our high standards.' },
    { text: 'We align lessons to your child’s curriculum and learning goals, ', bold: 'wherever you are in the world.' },
    { text: 'We provide a clear learning plan ', bold: 'based on assessments or your specific objectives.' },
    { text: 'We track progress and stay in touch, ', bold: 'ensuring your child is always supported.' },
];

const ourApproachSteps = [
    { icon: iconAssess, title: 'Assessment First', description: 'We understand each child’s current level before starting lessons.' },
    { icon: approachPlans, title: 'Personalised Learning Plans', description: 'No generic classes—every session is designed for your child’s needs.' },
    { icon: approachQuality, title: 'Consistent Quality', description: 'All tutors follow our structured methods and quality guidelines.' },
    { icon: approachFlexibility, title: 'Flexibility', description: 'Learn one-to-one or in a small group, at times that suit your family.' },
];


const AboutUsPage = () => {
  return (
    <main>
      <PageHero title="About Us" />

      <section className="py-6 bg-white mt-5">
        <Container>
          <Row className="">
            <Col lg={11} className="">
          
              <p className="para mt-3 text-center">
                TutorExel is an online tutoring company dedicated to helping school students succeed through high-quality, personalised education. We believe that every child deserves <strong>individual attention and expert guidance</strong>, no matter where they live. That’s why we bring together <strong>qualified teachers and proven learning methods</strong> to deliver engaging lessons right to your home.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ContentBanner
        image={missionTeacher}
        imagePosition="left"
        className="bg-white"
        content={
          <h2 className="text-center " style={{ fontSize: '2.4rem', color: '#ffffffff' }}>
            Our Mission
            <span className="d-block fs-5 mt-3 text-center about-mission-desc">
              Empowering students to achieve their best through trusted, customised online learning.
            </span>
          </h2>
        }
      />
      <FeatureSection
        imagePosition="right"
        image={differenceTeacher}
        headingText="What Makes Us Different"
        descriptionText="Unlike tutor marketplaces where parents have to search and screen tutors themselves, TutorExel takes care of everything for you."
        features={differenceFeatures}
        showButton={false} // We don't need a button here
      />
      <HowItWorksSection
        headingText="Our Approach"
        stepsData={ourApproachSteps}
        showButton={false}
      />
      <CTASection
        headingText="Ready to see the difference?"
        image={""}
        primaryButtonText="Book Your Free Trial Class"
        primaryButtonIcon={<FaArrowRight />}
        primaryButtonTextColor="black"
        secondaryButtonText="Contact Us to Learn More"
        secondaryButtonIcon={<FaArrowRight />}
      />
    </main>
  );
};

export default AboutUsPage;