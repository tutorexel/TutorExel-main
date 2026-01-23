// src/screens/AboutUsPage/AboutUsPage.jsx
"use client";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// 2. Import all necessary assets
const logo = "/images/logo.svg";
const missionTeacher = "/images/mission-teacher.png";
const differenceTeacher = "/images/difference-teacher.png";
const founder = "/images/viresh_sharma.png";
// import ctaFamily from '../../assets/images/cta-family.png';
const iconAssess = "/icons/icon-assess.svg";
const approachPlans = "/icons/icon-plans.svg";
const approachQuality = "/icons/icon-quality.svg";
const approachFlexibility = "/icons/icon-flexibility.svg";

// 3. Import all reusable components
import PageHero from "@/components/ui/PageHero";
import ContentBanner from "@/components/ui/ContentBanner";
import FeatureSection from "@/components/ui/FeatureSection";
import HowItWorksSection from "@/components/ui/HowItWorksSection";
import CTASection from "@/components/ui/CTASection";
import { FaArrowRight } from "react-icons/fa";

const differenceFeatures = [
  {
    text: "We hire and train our own educators - ",
    bold: "so you can be sure every teacher meets our high standards.",
  },
  {
    text: "We align lessons to your child’s curriculum and learning goals, ",
    bold: "wherever you are in the world.",
  },
  {
    text: "We provide a clear learning plan ",
    bold: "based on assessments or your specific objectives.",
  },
  {
    text: "We track progress and stay in touch, ",
    bold: "ensuring your child is always supported.",
  },
];

const ourApproachSteps = [
  {
    icon: iconAssess,
    title: "Assessment First",
    description:
      "We understand each child’s current level before starting lessons.",
  },
  {
    icon: approachPlans,
    title: "Personalised Learning Plans",
    description:
      "No generic classes—every session is designed for your child’s needs.",
  },
  {
    icon: approachQuality,
    title: "Consistent Quality",
    description:
      "All tutors follow our structured methods and quality guidelines.",
  },
  {
    icon: approachFlexibility,
    title: "Flexibility",
    description:
      "Learn one-to-one or in a small group, at times that suit your family.",
  },
];

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For calendly Popup

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <main className="about-page">
      <PageHero title="About Us" />

      <section className="py-6 bg-white mt-5 about-intro">
        <Container>
          <Row className="">
            <Col lg={11} className="">
              <p className="about-lead mt-3 text-justify">
                TutorExel is an online tutoring company dedicated to helping
                school students succeed through high-quality, personalised
                education. We believe that every child deserves individual
                attention and expert guidance, no matter where they live. That’s
                why we bring together qualified teachers and proven learning
                methods to deliver engaging lessons right to your home.
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
          <div className="w-100">
            <h2
              className="text-center section-heading"
              style={{ color: "#ffffffff" }}
            >
              Our Mission
            </h2>
            <p
              className="text-white text-center banner-copy mx-auto mt-3"
              style={{ fontSize: "1.25rem", lineHeight: "1.7", margin: 0 }}
            >
              Empowering students to achieve their best through trusted,
              customised online learning.
            </p>
          </div>
        }
      />

      <section className="founder-speak-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="founder-speak-card">
                <h2 className="founder-speak-title">Founders Speak</h2>

                {/* Founder Image */}
                <div className="founder-image-wrapper">
                  <img
                    src={founder} // place image in public/images
                    alt="Founder - Viresh Sharma"
                    className="founder-image"
                  />
                </div>

                <p className="founder-speak-text">
                  “TutorExel was founded with a simple belief—that structured
                  learning, when aligned with the right curriculum and supported
                  by the right systems, can transform student outcomes. Our
                  focus is on clarity, consistency, and measurable progress for
                  every learner. We are committed to building a platform that
                  empowers students and gives parents complete confidence in
                  their child’s academic journey.”
                </p>

                <div className="founder-speak-name">— Viresh Sharma</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
        openPopup={openPopup}
      />

      {/* Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://calendly.com/tutorexel-info/democlass"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Book a meeting"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
};

export default AboutUsPage;
