// src/components/ChooseLevel.jsx

"use client";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ChooseLevel = ({
    headingText,
    description,
    boxData = [],
    showButton = true,
    buttonText = 'Get Started',
    buttonLink

}) => {
    return (
        // 1. Change the main section background to white
        <section className="py-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-heading">{headingText}</h2>
                    {description && (
                        <p className="lead text-secondary">
                            {description}
                        </p>
                    )}
                </div>
                <Row className="g-5">
                    {/* --- One-to-One Tutoring Card --- */}
                    {boxData.map((step, index) => (

                    
                        <Col md={6}>
                            {/* 2. Set the card's background color and remove the border */}
                            <Card className="h-100 learning-style-card" style={{ border: 'none' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={step.icon} 
                                    className="learning-style-image img-responsive"
                                    style={{ borderRadius: '16px 16px 0 0', 
                                            height: '350px',
                                            objectFit: 'cover',
                                            objectPosition: '0 -8px'}} 
                                />
                                <Card.Body className="p-4 text-center text-white" style={{backgroundColor: step.bgcolor, borderRadius: '16px', marginTop: '-16px'}}>
                                    <Card.Title as="h3" className="fw-bold">{step.title}</Card.Title>
                                    <div style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: '700' }}>{step.subTitle}</div>
                                    <p style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: '700' }}>
                                        {step.cardesc}
                                    </p>
                                    
                                    
                                    {showButton && (
                                        <div className="text-center mt-5">
                                            <Link herf={step.btnlink || "/contact"} className='main-btn'>
                                                
                                                {buttonText} <span className="ms-2"><FaArrowRight /></span>

                                            </Link>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                    
                </Row>
            </Container>
        </section>
    );
};

export default ChooseLevel;
