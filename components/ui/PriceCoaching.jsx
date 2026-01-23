"use client";
import { Card, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";


const PriceCoaching = ({ title, price1, price2 }) => {
  return (
    <>
    <Card className="price-coach pricing-box flex-fill d-flex flex-column shadow-sm">
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
        <Row className="g-3 justify-content-center">
          {/* <Col>
            <Button className="demo-btn" block>
              Book a Demo Class
            </Button>
          </Col> */}
          <Col lg={6}>
            <Link href='/contact'>
              <Button className="join-btn" block="true">
                Join
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
    </>
  );
};

export default PriceCoaching;
