// src/screens/ContactPage/ThankYouPage.jsx

import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, Link, useNavigate, useNavigation } from "react-router-dom";

// 1. Import the new assets and styles
import PageHero from "../../components/ui/PageHero";
import iconSuccessCheck from "../../assets/icons/icon-success-check.svg";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const isTeacherForm = location.state?.from === "teacher";
  const { from, price} = location.state || {};
  const isTeacherForm = from === "teacher";

  // After Click on Payment Button
  const handleProceed = () => {
    navigate("/policy-acceptance", {
      state: {
        // price,
        paymentUrl: "https://www.tutorexel.com/"
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const message = isTeacherForm
    ? "Thank you! Our team has received your application and will connect with you via WhatsApp and email within 3-5 business days if you are shortlisted."
    : (<>Your details have been received. Please complete payment of <span style={{fontWeight: '700', fontSize: '30px', color: '#FF9E10'}}>${price}</span> to confirm enrolment and activate the programme.</>);
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
            
              {/* <Link 
              to="#"
              target="_blank"
              >
                <Button className="btn btn-primary-orange" style={{marginTop: '3px'}}>
                  Proceed to Payment
                </Button> */}
                <Button className="btn btn-primary-orange" style={{marginTop: '3px'}} onClick={handleProceed}>
                  Proceed to Payment
                </Button>
              {/* </Link> */}
              <Link 
              to="/"
              target="_blank"
              
              >
                <Button className="btn btn-primary-orange" style={{marginLeft: '10px', marginTop: '3px'}}>
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
