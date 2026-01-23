"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

type TrustCard = {
  icon: string;
  title: React.ReactNode;
  description?: string;
  highlight?: boolean;
};

type TrustSectionProps = {
  headingText?: string;
  description?: React.ReactNode;
  cardsData?: TrustCard[];
  customStyles?: React.CSSProperties;
  length?: number;
};

export default function TrustSection({
  headingText = "Why Our Customers Trust Us",
  description,
  cardsData = [],
  customStyles = {},
  length = 3,
}: TrustSectionProps) {
  return (
    <section className="why-trust-section py-5" style={customStyles}>
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-white">{headingText}</h2>

          {description && (
            <p className="lead text-secondary mt-3">{description}</p>
          )}
        </div>

        <Row className="mt-3 g-4">
          {cardsData.map((card, index) => (
            <Col lg={length} md={6} key={index}>
              <Card
                className="h-100 border-0 shadow-sm py-3 text-center"
                style={{
                  borderRadius: "20px",
                  border: card.highlight ? "3px solid #22A3D2" : "none",
                }}
              >
                <Card.Body>
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="mb-4"
                    style={{ width: 80, height: 80 }}
                  />

                  <Card.Title as="h4" className="text-dark-navy">
                    {card.title}
                  </Card.Title>

                  <Card.Text className="text-secondary mt-3">
                    {card.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
