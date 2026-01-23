"use client";

import { FC, ReactNode } from "react";
import { Card, Button } from "react-bootstrap";

interface Point {
  title: string | ReactNode;
}

interface PricingCardProps {
  bgColor: string;
  title: string | ReactNode;
  points?: Point[];
  listIcon?: string;
  onSelect?: () => void;
}

const PricingCard: FC<PricingCardProps> = ({
  bgColor,
  title,
  points = [],
  listIcon,
  onSelect,
}) => {
  return (
    <Card
      className="coaching-card flex-fill d-flex flex-column text-white"
      style={{ backgroundColor: bgColor }}
    >
      <Card.Body className="d-flex flex-column">
        <div className="title-wrapper">
          <h3 className="card-title mb-3">{title}</h3>
        </div>

        <ul className="feature-list flex-grow-1">
          {points.map((item, index) => (
            <li key={index}>
              {listIcon && (
                <img src={listIcon} className="feature-icon" alt="icon" />
              )}
              {item.title}
            </li>
          ))}
        </ul>

        <div className="mt-auto text-center">
          {onSelect && (
            <Button className="select-btn" onClick={onSelect}>
              Select
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PricingCard;
