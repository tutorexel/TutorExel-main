// src/screens/ContactPage/ThankYouPage.jsx

import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// 1. Import the new assets and styles
import PageHero from "../../components/ui/PageHero";
import iconSuccessCheck from "../../assets/icons/icon-success-check.svg";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  const isTeacherForm = location.state?.from === "teacher";
  const message = isTeacherForm
    ? "Thank you! Our team has received your application and will connect with you via WhatsApp and email within 3-5 business days if you are shortlisted."
    : "Thank you! Our team will connect with you via WhatsApp and email within 24 hours to confirm your free trial and guide you through the next steps.";
  return (
    <main>
      <PageHero title="Contact Us" />
      <section className="py-5">
        <Container>
          <div className="thank-you-container">
            <img
              src={iconSuccessCheck}
              alt="Success"
              className="success-icon"
            />
            <p className="thank-you-message">{message}</p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ThankYouPage;
