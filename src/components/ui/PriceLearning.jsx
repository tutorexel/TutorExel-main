import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


const PriceLearning = () => {
  return (
    <>
    <style jsx>{`
    .pricing-wrapper {
        background: #22A3D2;
        padding: 40px 60px;
        border-radius: 20px;
        color: white;
    }

    .title {
        font-size: 42px;
        font-weight: 700;
    }

    .sub {
        font-weight: 300;
        font-size: 16px;
    }

    .pricing-box {
        margin-bottom: 30px;
    }
    .pricing-box h5{
        font-weight: 600;
    }

    .price {
        font-size: 40px;
        font-weight: 600;
        margin: 10px 0;
    }

    .price span {
        font-size: 16px;
        font-weight: 400;
    }

    .right-section {
        margin-top: 40px;
    }

    .family-card {
        border-radius: 18px;
        overflow: hidden;
        position: relative;
        padding: 0;
        background-color: #22A3D2;
        border: none;
        flex-direction: row;
    }

    .side-label {
        writing-mode: sideways-lr;
        background: #0F2A47;
        // background: linear-gradient(to right, red 0%, yellow 50%, green 100%);
        color: white;
        padding: 20px 20px 20px 10px;
        font-weight: 700;
        font-size: 18px;
        // position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .side-label-right{
        border: 6px solid #22a3d2;
        border-radius: 18px;
        background-color: #fff;
    }

    .pricing-card-box {
        margin-top: 20px;
    }

    .pricing-card-box h5{
        color: #22a3d2;
    }

    .demo-btn {
        width: 300px;
        background: #FF9E10;
        border: none;

        border-radius: 40px;
        font-size: 1rem;
        font-weight: 600;
    }

    .join-btn {
        width: 300px;
        background: #FF9E10;
        border: none;

        border-radius: 40px;
        font-size: 1rem;
        font-weight: 600;
    }

    /* Responsive Tweaks */
    @media (max-width: 768px) {
        .pricing-wrapper {
            padding: 30px 10px;
        }

        .title {
            text-align: center;
        }

        .side-label {
            position: relative;
            writing-mode: horizontal-tb;
            text-align: center;
            padding: 10px;
        }
        .side-label-right{
          padding: .5rem !important;
        }
        .family-card {
            flex-direction: column;
        }
    }

    `}</style>

    <div className="pricing-wrapper">
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* LEFT SECTION */}
          <Col xs={12} lg={6} className="left-section">
            <h1 className="title text-white">Self Learning</h1>

            <Row className="mt-4">
              <Col xs={12} md={6} className="pricing-box">
                <h5>1 Subject<br /><i>Maths/ English</i></h5>
                <p className="price">${"13.99"}<span> AUD/month</span></p>
                <p className="price">${"139"}<span> AUD/year</span></p>
              </Col>

              <Col xs={12} md={6} className="pricing-box">
                <h5>Both <i>Maths<br />and English</i></h5>
                <p className="price">${"21.99"}<span> AUD/month</span></p>
                <p className="price">${"219"}<span> AUD/year</span></p>
              </Col>
            </Row>
          </Col>

          {/* RIGHT SECTION */}
          <Col xs={12} lg={6} className="right-section">
            <Card className="family-card d-flex">
              <div className="side-label">FAMILY PLAN (UP TO 2 KIDS)</div>

              <Row className="px-4 py-4 side-label-right">
                <Col xs={12} md={6} className="pricing-card-box">
                  <h5>1 Subject<br /><i>Maths/ English</i></h5>
                  <p className="price">$19.99<span> AUD/month</span></p>
                  <p className="price">$199<span> AUD/year</span></p>
                </Col>

                <Col xs={12} md={6} className="pricing-card-box">
                  <h5>Both <i>Maths<br />and English</i></h5>
                  <p className="price">$29.99<span> AUD/month</span></p>
                  <p className="price">$299<span> AUD/year</span></p>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>

        {/* BUTTONS */}
        <Row className="text-center mt-4">
          <Col xs={12} md={6} className="mb-3 text-end">
            <Button className="demo-btn" size="lg">Book a Demo Class</Button>
          </Col>
          <Col xs={12} md={6} className=" text-start">
            <Button className="join-btn" size="lg">Join</Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default PriceLearning;
