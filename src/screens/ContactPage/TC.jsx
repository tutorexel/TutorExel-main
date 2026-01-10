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
          <h2 className="mb-4">Terms & Conditions</h2>

          <div
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
          </div>

          <Form.Check
            type="checkbox"
            label="I have read and agree to the Terms & Conditions"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mb-3"
          />

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
