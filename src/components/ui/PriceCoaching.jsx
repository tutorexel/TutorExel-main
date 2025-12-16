import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";


const PriceCoaching = ({ title, price1, price2 }) => {
  return (
    <>
    <style jsx>{`
    .pricing-box {
    border-radius: 18px !important;
    border: 6px solid #05AC8F !important;
    overflow: hidden !important;
    padding: 10px !important;
    }

    .pricing-title {
    color: #05AC8F;
    font-weight: 700;
    font-size: 40px;
    min-height: 100px;
    }

    .pricing-label {
    font-size: 16px;
    color: #444;
    margin: 0;
    }

    .pricing-price {
    font-size: 35px;
    margin-top: 5px;
    }

    .pricing-price span{
    font-size: 19px;
    font-weight: 600;
    }

    .sessions-box {
    background: #05AC8F;
    color: white;
    padding: 30px 20px;
    border-radius: 20px;
    width: 100%;
    }

    .sessions-number {
    font-size: 80px;
    font-weight: 600;
    margin: 0;
    }

    .sessions-text {
    font-size: 1.3rem;
    margin: 0;
    }

    .pricing-footer {
    background-color: #FFFFFF !important;
    border-top: none !important;
    padding: 20px !important;
    }

    .demo-btn,
    .join-btn {
    width: 100%;
    padding: 12px 0 !important;
    border-radius: 30px !important;
    font-weight: 600 !important;
    font-size: 1rem !important;
    border: none !important;
    }

    .demo-btn {
    background-color: #FF9E10 !important;
    }

    .join-btn {
    background-color: #FF9E10 !important;
    }
    `}</style>
    <Card className="pricing-box flex-fill d-flex flex-column shadow-sm">
      <Card.Body>
        <Row>
          {/* Left Side */}
          <Col md={8}>
            <h3 className="pricing-title">{title}</h3>

            <div className="mt-4">
              <p className="pricing-label">1 Subject</p>
              <p className="pricing-price">
                <strong>${price1}</strong> <span>AUD/month</span>
              </p>
            </div>

            <div className="mt-3">
              <p className="pricing-label">2 Subjects</p>
              <p className="pricing-price">
                <strong>${price2}</strong> <span>AUD/month</span>
              </p>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <div className="sessions-box text-center">
              <h1 className="sessions-number text-white">4</h1>
              <p className="sessions-text">Sessions<br/> per Month<br />per Subject</p>
            </div>
          </Col>
        </Row>
      </Card.Body>

      <Card.Footer className="pricing-footer">
        <Row className="g-3">
          <Col>
            <Button className="demo-btn" block>
              Book a Demo Class
            </Button>
          </Col>
          <Col>
            <Button className="join-btn" block>
              Join
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
    </>
  );
};

export default PriceCoaching;
