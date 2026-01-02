// src/screens/ContactPage/ThankYouPage.jsx

import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

// 1. Import the new assets and styles
import PageHero from "../../components/ui/PageHero";
import iconSuccessCheck from "../../assets/icons/icon-success-check.svg";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const location = useLocation();
  // const isTeacherForm = location.state?.from === "teacher";
  const { from, price} = location.state || {};
  const isTeacherForm = from === "teacher";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const message = isTeacherForm
    ? "Thank you! Our team has received your application and will connect with you via WhatsApp and email within 3-5 business days if you are shortlisted."
    : (<>Your details have been received. Please complete payment of <span className="primary-orange" style={{fontWeight: '700', fontSize: '30px'}}>${price}</span> to confirm enrolment and activate the programme.</>);
  return (
    <main>
      <PageHero title="Enroll Now" />
      <section className="py-5">
        <Container>
          <div className="thank-you-container">
            <img
              src={iconSuccessCheck}
              alt="Success"
              className="success-icon"
            />
            <h2 className="title mb-5" style={{color: '#FFF'}}>Enrolment Submitted</h2>
            <p className="thank-you-message mb-3">{message}</p>
            
              <Link 
              to="https://rzp.io/rzp/tutorexelpayment"
              target="_blank"
              >
                <Button className="btn btn-primary-orange">
                  Proceed to Payment
                </Button>
              </Link>
              <Link 
              to="/"
              target="_blank"
              style={{marginLeft: '10px'}}
              >
                <Button className="btn btn-primary-orange">
                  Go to Home
                </Button>
              </Link>
            
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ThankYouPage;
