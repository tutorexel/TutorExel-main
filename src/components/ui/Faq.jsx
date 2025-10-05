import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import './ui.css';

const Faq = ({
    heading,
    description,
    faqData = []
}) => {
    return (
        <section className="faq">
            <Container className="my-5">
                <row className="mt-3">
                    <h2 className="section-heading text-white">{heading}</h2>
                    {description && (
                        <p className="lead text-secondary mt-3">
                            {description}
                        </p>
                    )}
                    <Accordion>
                        {faqData.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.title}</Accordion.Header>
                            <Accordion.Body>{faq.content}</Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </row>
            </Container>
        </section>
    );
    
}
export default Faq;