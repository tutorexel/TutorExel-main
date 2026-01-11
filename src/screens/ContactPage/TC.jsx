// src/screens/TermsConditionPage.jsx

import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const TermsConditionPage = () => {
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { price, paymentUrl } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!paymentUrl) {
      navigate("/");
    }
  }, [paymentUrl, navigate]);

  const handleSubmit = () => {
    if (accepted) {
      window.location.href = paymentUrl; // Redirect to gateway
    }
  };

  return (
    <main>
      <section className="py-5">
        <Container style={{ maxWidth: "800px" }}>
          <h2 className="mb-4 ">Consent & Acceptance of Policies</h2>

          {/* <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            <p>
              By proceeding with the payment, you
              agree to the following terms:
            </p>
            <ul>
              <li>Fees once paid are non-refundable.</li>
              <li>Programme access is granted after successful payment.</li>
              <li>Any misuse may result in cancellation.</li>
              <li>Additional platform rules apply.</li>
            </ul>
          </div> */}

          {/* <Form.Check
            type="checkbox"
            label="I confirm that I have read, understood, and agree to be bound by the Terms & Conditions, Privacy Policy, and Refund & Cancellation Policy of TutorExel LLP."
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mb-3"
          /> */}

          <Form.Check className="mb-2">
    <Form.Check.Input
      type="checkbox"
      checked={accepted}
      onChange={(e) => {
        setAccepted(e.target.checked);
      }}
    />

    <Form.Check.Label>
      I confirm that I have read and agree to the{" "}
      <a href="/term-condition" target="_blank" rel="noopener noreferrer">
        Terms & Conditions
      </a>
      ,{" "}
      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      , and{" "}
      <a href="/#" target="_blank" rel="noopener noreferrer">
        Refund & Cancellation Policy
      </a>.
    </Form.Check.Label>
  </Form.Check>


          <Button
            className="btn btn-primary-orange"
            disabled={!accepted}
            onClick={handleSubmit}
          >
            Proceed to Payment
          </Button>
        </Container>
      </section>
    </main>
  );
};

export default TermsConditionPage;
