// src/components/LearningStyles.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import oneOnOne from '../../assets/images/one-on-one.png';
import groupClasses from '../../assets/images/group-classes.png';

const LearningStyles = () => {
    return (
        // 1. Change the main section background to white
        <section className="py-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-heading">Choose Your Learning Style</h2>
                    <p className="lead text-secondary">
                        At Tutorexel, we offer two  <br></br><strong>flexible</strong> ways to learn:
                    </p>
                </div>
                <Row className="g-5">
                    {/* --- One-to-One Tutoring Card --- */}
                    <Col md={6}>
                        {/* 2. Set the card's background color and remove the border */}
                        <Card className="h-100 learning-style-card" style={{ backgroundColor: '#FFF3E3', border: 'none', borderRadius: '20px' }}>
                            <Card.Img 
                                variant="top" 
                                src={oneOnOne} 
                                className="learning-style-image img-responsive"
                                style={{ borderRadius: '20px 20px 0 0' }} 
                            />
                            <Card.Body className="p-4">
                                <Card.Title as="h3" className="">One-to-One Tutoring</Card.Title>
                                <p className="text-secondary">Focused support and individual attention.</p>
                                {/* 3. Change to a numbered list and apply bold styling */}
                                <ol className="text-secondary ps-3">
                                    <li>A <strong>dedicated tutor</strong> who tailors every lesson to your child's pace.</li>
                                    <li>Perfect if your child needs focused help or prefers <strong>personalised guidance</strong>.</li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* --- Group Classes Card --- */}
                    <Col md={6}>
                        {/* 2. Set the card's background color and remove the border */}
                        <Card className="h-100 learning-style-card" style={{ backgroundColor: '#E8F9FF', border: 'none', borderRadius: '20px' }}>
                            <Card.Img 
                                variant="top" 
                                src={groupClasses} 
                                className="learning-style-image img-responsive"
                                style={{ borderRadius: '20px 20px 0 0' }} 
                            />
                            <Card.Body className="p-4">
                                <Card.Title as="h3" className="">Group Classes</Card.Title>
                                <p className="text-secondary">Collaborative learning with peers.</p>
                                {/* 3. Change to a numbered list and apply bold styling */}
                                <ol className="text-secondary ps-3">
                                    <li>Small <strong>group sessions</strong> to encourage peer interaction and shared motivation.</li>
                                    <li>Ideal if your child enjoys learning alongside others and working independently.</li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LearningStyles;
