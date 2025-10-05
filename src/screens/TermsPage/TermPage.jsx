import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHero from '../../components/ui/PageHero';

const TermPage = () => {
    useEffect(() => {
         window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {/* Section 1: Hero Banner */}
            <PageHero title="Terms & Conditions" />
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
                                    <p>Welcome to <strong>TutorExel</strong> (“we”, “us”, “our”). TutorExel operates under <strong>HEXATRAIL LLP</strong>, providing online tutoring and enrichment programs for students across various subjects and skill areas.</p>
                                    <p>By accessing or using our website (<a href="https://www.tutorexel.com">www.tutorexel.com</a>) and related services (collectively, “Services”), you agree to these Terms & Conditions (“Terms”). If you do not agree, please do not use the Services.</p>

                                    <hr />

        <h4>2. Services Overview</h4>
        <p>TutorExel provides live online tutoring across a range of academic and creative subjects, including <strong>Mathematics, English, Piano, and Guitar,</strong> with plans to introduce additional subjects and programs in the future.</p>
        <p>Services may include live classes, assessments, progress reports, interactive materials, and digital resources accessible through our learning platform. <br />TutorExel reserves the right to modify, enhance, or discontinue any part of the Services at its discretion.</p>

        <hr />

        <h4>3. Registration & Eligibility</h4>
        <ul>
          <li>Students aged 13 years or older may enrol independently.</li>
          <li>Students under 13 must be enrolled by a parent or legal guardian who consents to their participation and data use.</li>
          <li>You agree to provide accurate and complete information at the time of registration.</li>
          <li>TutorExel reserves the right to reject or terminate an enrolment if information provided is found to be false or incomplete.</li>
        </ul>

        <hr />

        <h4>4. Class Scheduling & Attendance</h4>
        <ul>
            <li>Classes are scheduled as per mutually agreed slots.</li>
            <li>Missed classes will not be refunded. A make-up class may be provided only if notified at least 24 hours in advance, subject to tutor availability.</li>
            <li>Frequent cancellations or last-minute changes may lead to suspension of services.</li>
            <li>TutorExel reserves the right to reschedule sessions when necessary, with reasonable notice.</li>
        </ul>

        <hr />

        <h4>5. Fees, Payment & Non-Refund Policy</h4>
        <h5>a) Fees:</h5>
        <p>You agree to pay the fees as displayed on the website, or as otherwise communicated through official TutorExel channels (WhatsApp, email, or invoice).</p>
        <h5>b) Payment Terms:</h5>
        <ul>
          <li>All payments must be made <b>in advance</b> before classes begin.</li>
          <li>Accepted payment modes include bank transfer, payment link, or other approved channels.</li>
        </ul>
        <h5>c) Non-Refundable Policy:</h5>
        <p>All payments made are <b>final and non-refundable</b>, whether classes are partially or fully attended.
        No refund or credit will be issued for discontinuation, dissatisfaction, or non-attendance once the service has commenced.
        </p>
        <h5>d) Service Withdrawal:</h5>
        <p>If a student or parent chooses to withdraw before completing purchased sessions, the remaining sessions are <b>forfeited</b> and cannot be refunded or transferred.</p>
        <h5>e) TutorExel’s Right to Cancel:</h5>
        <p>TutorExel may cancel enrolment due to non-payment, policy violation, or misconduct. No refund will be applicable in such cases.</p>

        <hr />

        <h4>6. Code of Conduct</h4>
        <p>All students and parents are expected to maintain respectful communication with tutors and staff.
        Any abusive, disruptive, or inappropriate behaviour may result in <b>immediate termination of service without refund.</b>
        </p>

        <hr />

        <h4>7. Intellectual Property</h4>
        <p>All course content, lesson materials, slides, worksheets, recordings, reports, and designs are the <b>exclusive intellectual property</b> of TutorExel / HEXATRAIL LLP. <br />
        You may use materials only for personal learning purposes. Copying, redistribution, or resale is strictly prohibited.
        </p>

        <hr />

        <h4>8. Performance Disclaimer</h4>
        <p>TutorExel strives to deliver high-quality instruction; however, learning outcomes vary based on individual student effort, attendance, and engagement. <br />
        TutorExel does <b>not guarantee specific grades, marks, or results.</b>
        </p>

        <hr />

        <h4>9. Limitation of Liability</h4>
        <ul>
            <li>TutorExel shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
            <li>Total liability, under any claim, shall not exceed the total amount paid for the current billing period.</li>
            <li>TutorExel is not responsible for interruptions caused by internet issues, third-party platforms, or user device failures.</li>
        </ul>

        <hr />

        <h4>10. Termination</h4>
        <ul>
            <li>TutorExel may suspend or terminate services for policy violations, non-payment, or misconduct.</li>
            <li>Any unused sessions upon termination are automatically forfeited.</li>
            <li>Payment obligations and intellectual property rights survive termination.</li>
        </ul>

        <hr />

        <h4>11. Privacy & Data Protection</h4>
        <p>Your data is handled according to our Privacy Policy, available at <a href="https://www.tutorexel.com">www.tutorexel.com</a>. <br />
        By using our services, you consent to the collection and use of your information as outlined there.
        </p>

        <hr />

        <h4>12. Governing Law & Jurisdiction</h4>
        <p>These Terms shall be governed by and construed under the laws of <b>India</b>.</p>
        <p>Any dispute arising under these Terms shall fall within the <b>exclusive jurisdiction of courts at Chandigarh, Chandigarh</b>.</p>
        
        <hr />

        <h4>13. Changes to Terms</h4>
        <p>TutorExel may revise these Terms at any time. The updated version will be posted on the website with a new effective date. Continued use of services indicates acceptance of the changes.</p>
        
        <hr />

        <h4>14. Contact Information</h4>
        <p>For any questions, clarifications, or complaints, please contact:</p>
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

export default TermPage;