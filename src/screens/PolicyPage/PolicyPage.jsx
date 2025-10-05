import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHero from '../../components/ui/PageHero';

const PolicyPage = () => {
    useEffect(() => {
         window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {/* Section 1: Hero Banner */}
            <PageHero title="Privacy Policy" />
            <section className="py-5 my-5 bg-white blog-page">
                <div className="single-blog">
                    <Container className="my-5">
                        <Row>
                        <Col lg={12} className="mx-auto">
                            <Card className="shadow-sm">                            
                            <Card.Body>
                                <div className="blog-content">
                                    <p><b>Effective Date: </b>1st September 2025</p>

                                    <hr />

                                    <h4>1. Introduction</h4>
                                    <p>TutorExel (“we”, “us”, “our”) values your privacy and is committed to protecting personal information in compliance with applicable laws.</p>
                                    <p>This Privacy Policy describes how we collect, use, store, and protect your information when you use <a href="https://www.tutorexel.com/">www.tutorexel.com</a> and related services.</p>

                                    <hr />

        <h4>2. Information We Collect</h4>
        <p>We may collect the following types of information:</p>
        <h5>a) Personal Information:</h5>
        <ul>
          <li>Name, email address, phone number, city/country</li>
          <li>Student details such as year level and subject preferences</li>
          <li>Payment and billing information (processed via secure gateways)</li>
        </ul>
        <h5>b) Automatically Collected Information:</h5>
        <ul>
          <li>Device data, IP address, browser type, cookies, and usage statistics</li>
        </ul>
        <h5>c) Communication Data:</h5>
        <ul>
          <li>Messages, inquiries, or feedback sent via WhatsApp, website forms, or email</li>
        </ul>
        <p>We do not knowingly collect sensitive data unless voluntarily provided for educational or billing purposes.</p>

        <hr />

        <h4>3. Purpose of Collection</h4>
        <p>We collect and process data for legitimate educational and operational purposes, including:</p>
        <ul>
          <li>Scheduling and managing classes</li>
          <li>Providing lessons, materials, and assessments</li>
          <li>Generating progress reports</li>
          <li>Processing payments</li>
          <li>Sending notifications and updates</li>
          <li>Improving services and website performance</li>
          <li>Legal compliance and recordkeeping</li>
        </ul>

        <hr />

        <h4>4. Legal Basis for Processing</h4>
        <p>Your information is processed with consent, to perform a service you requested, or to meet legal obligations.</p>

        <hr />

        <h4>5. Data Sharing & Disclosure</h4>
        <p>We may share data with:</p>
        <ul>
          <li>Tutors and authorized staff for educational delivery</li>
          <li>Technology providers (e.g., learning platforms, payment gateways, email services)</li>
          <li>Legal or government authorities when required by law <br />We do not sell, rent, or trade your personal data.</li>
        </ul>

        <hr />

        <h4>6. Cookies & Tracking Technologies</h4>
        <p>We use cookies to improve website performance, remember preferences, and analyze traffic. <br />
        You may disable cookies in your browser, though some site features may not function properly.
        </p>

        <hr />

        <h4>7. Data Retention & Security</h4>
        <ul>
          <li>We retain data only as long as necessary for operational or legal purposes.</li>
          <li>Data is stored on secure servers with restricted access.</li>
          <li>While we use strong security measures, no system is completely immune from risks.</li>
        </ul>

        <hr />

        <h4>8. Children’s Data</h4>
        <p>TutorExel’s services are suitable for students aged 13 and above. <br />
        Students below 13 may participate only with parental or guardian consent. <br />
        We do not knowingly collect data from children without consent.
        </p>

        <hr />

        <h4>9. Your Rights</h4>
        <p>You may request to:</p>
        <ul>
            <li>Access or correct your data</li>
            <li>Withdraw consent for marketing communication</li>
            <li>Request deletion of your personal data (subject to legal requirements)</li>
        </ul>
        <p>For such requests, contact us at info@tutorexel.com.</p>

        <hr />

        <h4>10. International Transfers</h4>
        <p>If your data is transferred or stored outside India, equivalent data protection safeguards are maintained.</p>

        <hr />

        <h4>11. Policy Updates</h4>
        <p>TutorExel may update this policy periodically. The revised policy will be posted with an updated “Effective Date.”</p>

        <hr />

        <h4>12. Contact Us</h4>
        <p>For privacy-related queries or complaints:</p>
        <p>📧 <a href="mailto:info@tutorexel.com">info@tutorexel.com</a></p>
        <p>🌐 <a href="https://www.tutorexel.com">www.tutorexel.com</a></p>

                                </div>
                            </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </main>
    );
}

export default PolicyPage;