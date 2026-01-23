"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container, Row, Button } from "react-bootstrap";
import Link from "next/link";

import Image from "next/image";

import HeroNew from "@/components/ui/HeroNew";
import Curriculum from "@/components/ui/CourseCurriculum";

import HowItWorksSection from "@/components/ui/HowItWorks";
import Testimonials from "@/components/ui/Testimonials";
import CTAHome from "@/components/ui/CTAHome";

const heroButton = [
  { link: "/contact", label: "Explore Courses" },
  { link: "/contact", label: "Talk to a Career Advisor" },
];

const howItWorksSteps = [
  {
    icon: "/icons/icon-assess.svg",
    title: "Assess",
    description:
      "Take a free assessment to understand your child’s current level.",
  },
  {
    icon: "/icons/icon-plan.svg",
    title: "Review",
    description:
      "Receive a detailed performance report with clear insights and recommendations.",
  },
  {
    icon: "/icons/icon-experience.svg",
    title: "Experience",
    description:
      "Start with a free trial class to experience how engaging, interactive, and effective our online learning is.",
  },
  {
    icon: "/icons/icon-learn-grow.svg",
    title: "Enroll",
    description:
      "Enroll with a tailored learning plan designed specifically for your child—and watch them grow.",
  },
];

// export const metadata = {
//   title: "Online Tutoring Australia | TutorExel Personalised Learning",
//   description:
//     "TutorExel offers expert online tutoring across Australia. We provide personalised learning & exam prep in all subjects, aligned with the Australian Curriculum.",
// };

const Home = () => {
  const [showNaplanPopup, setShowNaplanPopup] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowNaplanPopup(true);
  }, []);

  // For calendly Popup

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const [show, setShow] = useState(true); // visible by default

  return (
    <main>
      <HeroNew openPopup={openPopup} />

      <Curriculum />

      <HowItWorksSection
        headingText="How It Works"
        stepsData={howItWorksSteps}
        showButton={true}
        buttonText="Take your assessment test"
        buttonIcon={<FaArrowRight />}
        buttonLink="https://learn.tutorexel.com/d2q1kr392kq4gu3vn2ig/join/JjJCwO6.r9GqgrpkB8KYV6BP6RXVj4rYXvovQrWOf53qVGCwyC15HxAKs8yNNt3BXQHRugQowSh_xG6kTWlSqcDVKwBUZwMF"
      />

      <Testimonials />

      <CTAHome
        headingText="Ready to Help Your Child Succeed?"
        image={""}
        primaryButtonText="Book Your Free Trial Class"
        primaryButtonIcon={<FaArrowRight />}
        primaryButtonTextColor="black"
        secondaryButtonText="Contact Us to Learn More"
        secondaryButtonIcon={<FaArrowRight />}
        secondaryButtonTextColor="#FFFFFF"
        openPopup={openPopup}
      />

      {/* <div className="offer-img">
                <div className="offer-data tooltip-wrapper">
                    
                    
                    {show && (
                        <div className="custom-tooltip">
                            <span>Book Your Free Trial Class</span>
                            <button
                                className="tooltip-close"
                                onClick={() => setShow(false)}
                            >
                                ×
                            </button>
                        </div>
                    )}

                    <Button onClick={openPopup}>
                        <img
                            src="/images/book-demo.png"
                            alt="Book Demo"
                            className="demo-icon"
                        />
                    </Button>

                </div>
            </div> */}

      <div className="fixed-div">
        <div className="inner-fixed-div">
          <h6>Hurry up. Book your demo class</h6>
          <div className="inner-btn">
            <Button
              onClick={openPopup}
              className="d-inline-flex align-items-center btn btn-primary-orange"
            >
              Book Here
            </Button>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              loading="lazy"
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

      {showNaplanPopup && (
        <div
          className="nap-popup-overlay"
          onClick={() => setShowNaplanPopup(false)}
        >
          <div
            className="nap-popup-content naplan-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="nap-popup-close"
              onClick={() => setShowNaplanPopup(false)}
            >
              ×
            </button>

            <h3>
              <strong>NAPLAN Bootcamp</strong>
            </h3>
            <p>
              <strong>Starting 26th Jan, 2026</strong>
            </p>

            <p>Click below to know more and enroll now!</p>

            <Link href="/pricing" passHref>
              <Button className="btn btn-primary-orange">Enroll Now</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
