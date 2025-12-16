import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";


const PriceNaplan = ({ title, price1, price2 }) => {
  return (
    <>
    <style jsx>{`
    .naplan-card{margin: auto;}
    .pricing-wrapper {
    max-width: 900px;
    }

    .pricing-card {
    border-radius: 18px;
    border: 6px solid #0F2A47;
    padding: 25px;
    }

    .title {
    font-size: 40px;
    font-weight: 700;
    color: #0F2A47;
    text-align: left;
    }

    .subtitle {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: left;
    }

    .price {
    font-size: 40px;
    font-weight: 800;
    margin: 10px 0;
    text-align: left;
    }

    .currency {
    font-size: 18px;
    font-weight: 600;
    }

    .action-btn {
    background-color: #FF9E10;
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    width: 100%;
    }

    .action-btn:hover {
    background-color: #fb8c00;
    }

    @media (max-width: 576px) {
        .pricing-card {
            padding: 20px;
        }

        .action-btn {
            width: 100%;
        }
    }
    @media (max-width: 767px){
        .naplan-card{
            margin-top: 1.5rem;
        }
    }

    `}</style>
    <div className="pricing-wrapper">
      <Card className="pricing-card mx-auto shadow">
        <Card.Body>
          <h2 className="title">NAPLAN Bootcamp</h2>

          <Row className="mt-4 text-center">
            {/* Live Coaching Section */}
            <Col md={6} className="pricing-section mb-4">
              <p className="subtitle">Live Coaching and Material</p>
              <p className="price">$190 <span className="currency">AUD</span></p>
              {/* <Button className="action-btn">Book a Demo Class</Button> */}
            </Col>

            {/* Self Learning Material */}
            <Col md={6} className="pricing-section mb-4">
              <p className="subtitle">Self Learning Material</p>
              <p className="price">$29.90 <span className="currency">AUD</span></p>
              {/* <Button className="action-btn">Join</Button> */}
            </Col>
          </Row>

          {/* BUTTONS */}
                  <Row className="text-center">
                    <Col xs={12} md={6} className="mb-3 text-end">
                      <Button className="action-btn" size="lg">Book a Demo Class</Button>
                    </Col>
                    <Col xs={12} md={6} className=" text-start">
                      <Button className="action-btn" size="lg">Join</Button>
                    </Col>
                  </Row>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default PriceNaplan;
