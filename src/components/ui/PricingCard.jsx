import React, {useState, useEffect} from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";

const PricingCard = ({
    bgColor,
    title,
    points = [],
    listIcon,
    onSelect
}) => {
    return(
        <Card className="coaching-card flex-fill d-flex flex-column text-white" style={{backgroundColor: bgColor}}>
            <Card.Body className="d-flex flex-column">
                <div className="title-wrapper">
                    <h3 className="card-title mb-3">{title}</h3>
                </div>

                <ul className="feature-list flex-grow-1">
                    {points.map((item,index)=>(
                        <li key={index}><img src={listIcon} className="feature-icon" alt="icon" />{item.title}</li>
                    ))}
                   
                </ul>

                <div className="mt-auto text-center">
                    <Button className="select-btn" onClick={onSelect}>Select</Button>
                </div>
            </Card.Body>
        </Card>
    )
};

export default PricingCard;