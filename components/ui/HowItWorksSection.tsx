"use client";

import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

const arrowSeparatorDesktop = "/icons/arrow-separator.svg";
const arrowSeparatorMobile = "/icons/arrow-separator-bottom.svg";

type Step = {
  icon: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

type HowItWorksSectionProps = {
  headingText?: string;
  stepsData?: Step[];
  showButton?: boolean;
  buttonText?: string;
  backgroundClass?: string;
  buttonIcon?: React.ReactNode;
  buttonLink?: string;
  arrowIcon?: string;
};

export default function HowItWorksSection({
  headingText = "How It Works",
  stepsData = [],
  showButton = false,
  buttonText = "Get Started",
  backgroundClass = "hero-section-bg",
  buttonIcon,
  buttonLink,
  arrowIcon,
}: HowItWorksSectionProps) {
  const ActionButton = (
    <Button
      variant="primary-orange"
      size="lg"
      className="d-inline-flex align-items-center"
    >
      {buttonText}
      {buttonIcon && <span className="ms-2">{buttonIcon}</span>}
    </Button>
  );

  return (
    <section className={`${backgroundClass} hiw-wrapper`}>
      <Container>
        <div className="text-center">
          <h2 className="section-heading hiw-title">{headingText}</h2>
        </div>

        <div className="hiw-card mt-5">
          <Row className="mt-2 g-4 justify-content-between">
            {stepsData.map((step, index) => (
              <Fragment key={index}>
                <Col lg={2} md={6} className="text-center hiw-step">
                  <img
                    src={step.icon}
                    alt={`${step.title} icon`}
                    className="mb-3"
                  />
                  <h4 className="fw-bold">{step.title}</h4>
                  <p className="text-secondary">{step.description}</p>
                </Col>

                {index < stepsData.length - 1 && (
                  <Col
                    lg="auto"
                    className="d-flex align-items-center justify-content-center hiw-arrow"
                  >
                    <img
                      src={arrowSeparatorDesktop}
                      alt="arrow separator desktop"
                      className="d-none d-lg-block"
                    />
                    <img
                      src={arrowSeparatorMobile}
                      alt="arrow separator mobile"
                      className="d-block d-lg-none"
                    />
                  </Col>
                )}
              </Fragment>
            ))}
          </Row>
        </div>

        {showButton && (
          <div className="text-center mt-5">
            <Link href={buttonLink ?? "/contact"}>{ActionButton}</Link>
          </div>
        )}
      </Container>
    </section>
  );
}
