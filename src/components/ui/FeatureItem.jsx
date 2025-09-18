import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ui.css';

const FeatureItem = ({
    title,
    description,
    itemData = [],
    length = '3'
}) => {
    return (
        <section className="feature-items">
            <Container>
                <Row className="mt-3">
                    <h2 className="section-heading text-white">{title}</h2>
                    {description && (
                            <p className="lead text-secondary mt-3">
                            {description}
                            </p>
                    )}
                    <div className="d-flex item-directn mt-5 gap-4">
                        {itemData.map((item, index) => (
                            <Col lg={length} md={6} key={index}>
                                <div className="pricing-feature-item">
                                    <img src={item.icon} alt="Feature Icon" />
                                    <div className="feature-text">
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default FeatureItem;