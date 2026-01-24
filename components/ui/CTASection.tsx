"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const defaultImage = "/images/placeholder.jpg";

type CTASectionProps = {
  headingText?: string;
  image?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
  primaryButtonTextColor?: string;
  secondaryButtonTextColor?: string;
  customStyles?: React.CSSProperties;
  openPopup?: () => void;
};

export default function CTASection({
  headingText = "Ready to Get Started?",
  image = defaultImage,
  imageAlt = "",
  primaryButtonText = "Primary Action",
  secondaryButtonText = "Secondary Action",
  primaryButtonIcon,
  secondaryButtonIcon = <FaArrowRight />,
  primaryButtonTextColor,
  secondaryButtonTextColor,
  customStyles = {},
  openPopup,
}: CTASectionProps) {
  return (
    <section
      className="bg-white"
      style={{ paddingTop: "10px", paddingBottom: "10px", ...customStyles }}
    >
      <Container>
        <div className="position-relative">
          <div
            className="bg-primary-orange-gradient p-5 rounded-4 overflow-hidden"
            style={{ minHeight: "230px" }}
          >
            <Row className="align-items-center text-align-center">
              <Col lg={12}>
                <h2 className="section-heading text-white text-center">
                  {headingText}
                </h2>

                <div className="d-flex flex-column flex-sm-row gap-3 mt-4 text-center justify-content-center">
                  <Button
                    onClick={openPopup}
                    className="main-btn d-flex align-items-center justify-content-between"
                    style={{ color: primaryButtonTextColor }}
                  >
                    {primaryButtonText}
                    {primaryButtonIcon && (
                      <span className="ms-2">{primaryButtonIcon}</span>
                    )}
                  </Button>

                  <Link
                    href="/contact"
                    className="main-btn-b d-flex align-items-center justify-content-between"
                    style={{ color: secondaryButtonTextColor }}
                  >
                    {secondaryButtonText}
                    {secondaryButtonIcon && (
                      <span className="ms-2">{secondaryButtonIcon}</span>
                    )}
                  </Link>
                </div>
              </Col>
            </Row>
          </div>

          {image && (
            <div
              className="d-none d-lg-block position-absolute"
              style={{ bottom: 5, right: "0px", zIndex: 1 }}
            >
              <img
                src={image}
                alt={imageAlt}
                style={{ width: "100%", maxWidth: "580px" }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
