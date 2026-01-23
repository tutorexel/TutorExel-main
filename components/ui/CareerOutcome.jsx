"use client";
import { Container, Row, Col, Button } from 'react-bootstrap';
const placeholder = '/images/placeholder.jpg';

const CareerOutcome = ({
    title,
    description,
    points={}
}) => {
    return(
        <section className="outcome-section py-5 m">
            <Container>
                <Row className="align-items-center gy-4 gy-lg-5">
                    <Col lg={6} className="">
                        <h1 className="section-heading hero-title text-dark-navy">{title}</h1>
                        <p>{description}</p>
                    </Col>
                    <Col lg={6} className="">
                        <div className="mt-5 gap-4">
                            {points.map((point, index) => (
                                <Col lg={12} md={6} key={index}>
                                    <div className="pricing-feature-item d-flex align-items-center gap-4 py-2">
                                        <img src={point.icon} alt="Feature Icon" />
                                        <div className="feature-text">
                                            <h5>{point.heading}</h5>
                                            <p>{point.text}</p>
                                        </div>
                                    </div>
                                </Col>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CareerOutcome;