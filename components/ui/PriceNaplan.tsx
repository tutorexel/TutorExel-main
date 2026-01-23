"use client";

import { FC } from "react";
import { Container, Card, Row, Col, Button, Table } from "react-bootstrap";
import Link from "next/link";

interface PriceNaplanProps {
  title?: string;
  price1?: string | number;
  price2?: string | number;
}

const PriceNaplan: FC<PriceNaplanProps> = ({ title }) => {
  return (
    <div className="price-nap pricing-wrapper">
      <Card className="pricing-card mx-auto shadow">
        <Card.Body>
          <h2 className="title">{title || "NAPLAN Bootcamp"}</h2>

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
                    <td>1 Subject (8 Sessions)</td>
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
            </Col>
          </Row>

          {/* BUTTONS */}
          <Row className="text-center justify-content-center mt-4">
            <Col xs={12} md={4} className="text-start">
              <Link href="/contact" passHref>
                <Button className="action-btn" size="lg">
                  Join
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceNaplan;
