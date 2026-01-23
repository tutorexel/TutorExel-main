"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const checkmarkIcon = "/icons/checkmark-icon.svg";

type Feature = {
  text: React.ReactNode;
  bold?: string;
};

type FeatureSectionProps = {
  imagePosition?: "left" | "right";
  image: string;
  imageAlt?: string;
  headingText: string;
  descriptionText: React.ReactNode;
  features?: Feature[];
  beforeButton?: React.ReactNode;
  showButton?: boolean;
  buttonText?: string;
  customStyles?: React.CSSProperties;
};

export default function FeatureSection({
  imagePosition = "left",
  image,
  imageAlt = "Feature image",
  headingText,
  descriptionText,
  features = [],
  beforeButton,
  showButton = true,
  buttonText = "Learn More",
  customStyles = {},
}: FeatureSectionProps) {
  const ImageColumn = (
    <Col lg={6} className="d-flex justify-content-center">
      <img
        src={image}
        alt={imageAlt}
        className="img-fluid w-100"
        style={{ borderRadius: "40px", maxWidth: "640px" }}
      />
    </Col>
  );

  const TextColumn = (
    <Col lg={6} className="text-center text-lg-start">
      <h2 className="section-heading mb-3" style={{ lineHeight: "1.3" }}>
        {headingText}
      </h2>

      <div className="text-secondary mt-2 feature-description">
        {descriptionText}
      </div>

      <div className="d-grid gap-1 feature-list mt-3">
        {features.map((feature, index) => (
          <div key={index} className="feature-item mx-lg-0 mx-auto p-3 mb-2">
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              style={{ width: 28, height: 28, flexShrink: 0 }}
            />
            <span>
              {feature.text}
              {feature.bold && <strong>{feature.bold}</strong>}
            </span>
          </div>
        ))}
      </div>

      {beforeButton && <p className="text-secondary mt-3">{beforeButton}</p>}

      {showButton && (
        <Link
          href="/contact"
          className="mt-4 d-inline-flex align-items-center main-btn1 mx-lg-0 mx-auto"
        >
          {buttonText} <FaArrowRight className="ms-2" />
        </Link>
      )}
    </Col>
  );

  return (
    <section
      className="bg-white feature-section"
      style={{ padding: "54px 0", ...customStyles }}
    >
      <Container>
        <Row className="align-items-center g-5">
          {imagePosition === "left" ? (
            <>
              {ImageColumn}
              {TextColumn}
            </>
          ) : (
            <>
              {TextColumn}
              {ImageColumn}
            </>
          )}
        </Row>
      </Container>
    </section>
  );
}
