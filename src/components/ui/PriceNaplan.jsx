import React from "react";
import { Container, Card, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


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
    font-size: 21px;
    font-weight: 700;
    color: #000;
    text-align: left;
    }

    .price {
    font-size: 40px;
    font-weight: 800;
    margin: 10px 0;
    text-align: left;
    }
    .pricing-section table{
    border-color: #0F2A47;
    }
    .pricing-section table th {
        background-color: #0F2A47 !important;
        color: #fff !important;
        border-color: #fff;
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
              <Table bordered responsive className="mt-3">
                <thead>
                  <tr>
                    <th></th>
                    <th>One to One</th>
                    <th>Group (3:1)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Subject(8 Sessions)</td>
                    <td>199 AUD</td>
                    <td>119 AUD</td>
                  </tr>
                  <tr>
                    <td>2 Subjects (16 Sessions)</td>
                    <td>349 AUD</td>
                    <td>199 AUD</td>
                  </tr>
                </tbody>
              </Table>
              {/* <p className="price">$190 <span className="currency">AUD</span></p> */}
              {/* <Button className="action-btn">Book a Demo Class</Button> */}
            </Col>

            {/* Self Learning Material */}
            <Col md={6} className="pricing-section mb-4">
              <p className="subtitle">Self Learning Material</p>
              <Table bordered responsive className="mt-3">
                <thead>
                  <tr>
                    <th>1 Subject</th>
                    <th>2 Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>29 AUD</td>
                    <td>49 AUD</td>
                  </tr>
                </tbody>
              </Table>
              {/* <p className="price">$29.90 <span className="currency">AUD</span></p> */}
              {/* <Button className="action-btn">Join</Button> */}
            </Col>
          </Row>

          {/* BUTTONS */}
                  <Row className="text-center justify-content-center">
                    {/* <Col xs={12} md={6} className="mb-3 text-end">
                      <Button className="action-btn" size="lg">Book a Demo Class</Button>
                    </Col> */}
                    <Col xs={12} md={4} className=" text-start">
                      <Link to="/contact">
                        <Button className="action-btn" size="lg">Join</Button>
                      </Link>
                    </Col>
                  </Row>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default PriceNaplan;
