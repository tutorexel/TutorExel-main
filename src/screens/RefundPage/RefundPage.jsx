import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHero from '../../components/ui/PageHero';

const RefundPage = () => {
    useEffect(() => {
         window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            {/* Section 1: Hero Banner */}
            <PageHero title="REFUND & CANCELLATION POLICY" />
            <section className="py-5 my-5 bg-white blog-page">
                <div className="single-blog">
                    <Container className="my-5">
                        <Row>
                        <Col lg={12} className="mx-auto">
                            <Card className="shadow-sm">                            
                            <Card.Body>
                                <div className="blog-content">
            <p><b>Effective Date: </b>19th January 2026</p>
            <p>This Refund and Cancellation Policy (“Policy”) governs all refunds, cancellations, withdrawals, and fee-related disputes in relation to Courses and Services offered by <b>TutorExel LLP</b> (“TutorExel”, “we”, “us”, or “our”).</p>
            <p>This Policy forms an <b>integral part of TutorExel’s Terms & Conditions</b> and must be read in conjunction with them. By enrolling in any Course or using any Service, the Parent or Guardian (“you”) agrees to be bound by this Policy.</p>

            <hr />

            <h4>1. GENERAL PRINCIPLES</h4>
            <ol>
                <li>TutorExel offers <b>online educational services</b>, including:
                    <ul>
                        <li>live online tutoring classes,</li>
                        <li>co-curricular classes,</li>
                        <li>NAPLAN Bootcamp (live and self-study),</li>
                        <li>assessments, quizzes, recordings, and digital learning material.</li>
                    </ul>
                </li>
                <li>Due to the <b>intangible, time-bound, and personalised nature</b> of these Services, <b>refunds are limited and conditional</b>.</li>
                <li><b>No oral assurances, sales discussions, WhatsApp messages, or verbal representations</b> shall override this written Policy.</li>
            </ol>

            <hr />

            <h4>2. COMMENCEMENT OF SERVICES</h4>
            <p>Services shall be deemed to have commenced when any one of the following occurs (whichever is earliest):</p>
            <ul>
                <li>the Student attends the <b>first live class</b>;</li>
                <li>access credentials to the Platform, recordings, or learning material are shared;</li>
                <li>any session (live or recorded) is consumed;</li>
                <li>any assessment, worksheet, or digital content is accessed.</li>
                <li>issuance of login credentials for NAPLAN Bootcamp – Self-Study.</li>
            </ul>
            <p>Once Services have commenced, <b>refunds are strictly limited</b> as outlined below. No refund, extension, credit, or substitution shall be permitted for NAPLAN Bootcamp – Self-Study once login credentials are issued.</p>

            <hr />

            <h4>3. CANCELLATION BY PARENT / GUARDIAN</h4>
            <h5>3.1 Before Commencement of Services</h5>
            <p>If a cancellation request is received before Services commence, TutorExel may process a refund after deducting:</p>
            <ul>
                <li>payment gateway charges,</li>
                <li>administrative and onboarding costs,</li>
                <li>taxes already remitted (if applicable).</li>
            </ul>
            <p>Refund eligibility and amount may vary depending on the Course type.</p>

            <h5>3.2 After Commencement of Services</h5>
            <p><b>No refund</b> shall be provided for:</p>
            <ul>
                <li>any class already attended,</li>
                <li>any recorded session accessed,</li>
                <li>any learning material, worksheet, assessment, or test accessed,</li>
                <li>any subscription period already started.</li>
            </ul>
            <p>For Courses spanning multiple sessions or months (<b>excluding NAPLAN Bootcamp – Live and Self-Study</b>), any refund, <b>if approved</b>, shall be calculated on a <b>pro-rata basis</b> and shall apply <b>only to unconsumed Services</b>, at TutorExel’s sole discretion.</p>

            <hr />

            <h4>4. COURSE-SPECIFIC REFUND RULES</h4>
            <h5>4.1 Live Online Classes (1:1 or Small Group)</h5>
            <ul>
                <li>Once the first class is attended or access is provided, no refund for consumed sessions.</li>
                <li>Missed classes due to Student absence are non-refundable.</li>
                <li>Make-up classes may be offered at TutorExel’s discretion but do not entitle refund.</li>
                <li>For Live Online Classes (excluding NAPLAN Bootcamp – Live), if a refund is approved after commencement of Services, such refund shall be calculated on a pro-rata basis and shall apply only to unconsumed sessions.</li>
            </ul>

            <h5>4.2 NAPLAN Bootcamp – Live</h5>
            <p>No refund once:</p>
            <ul>
                <li>the bootcamp starts, or</li>
                <li>any live session, mock test, or material is accessed.</li>
            </ul>
            <p>This applies regardless of attendance or performance.</p>

            <h5>4.3 NAPLAN Bootcamp – Self-Study</h5>
            <p>For NAPLAN Bootcamp – Self-Study, the sharing of login credentials to access the learning platform, practice material, mock tests, or any related content shall constitute commencement of Services.</p>
            <p>Once login credentials are issued, the enrolment shall be deemed active and non-refundable, irrespective of whether the Student accesses or consumes the content.</p>
            <p>Access to all NAPLAN Self-Study materials shall remain valid only until 31 March 2026, after which all access shall automatically expire without notice.</p>
            <p>TutorExel shall have no obligation to extend access, provide refunds, or offer continued availability of content beyond the stated expiry date under any circumstances.</p>

            <h5>4.4 Co-Curricular Classes (Music, Activities, etc.)</h5>
            <ul>
                <li>Same rules as live academic classes apply.</li>
                <li>Trial or demo classes (if any) do not guarantee refund eligibility.</li>
            </ul>

            <hr />

            <h4>5. CANCELLATION BY TUTOREXEL</h4>
            <p>TutorExel may cancel or discontinue a Course or enrolment due to:</p>
            <ul>
                <li>instructor unavailability,</li>
                <li>operational constraints,</li>
                <li>force majeure events,</li>
                <li>regulatory or technical reasons.</li>
            </ul>
            <p>In such cases:</p>
            <ul>
                <li>TutorExel shall refund only the unconsumed portion of Course Fees;</li>
                <li>the refund shall not exceed the total amount paid for that enrolment;</li>
                <li>no additional compensation, damages, or interest shall be payable.</li>
            </ul>

            <hr />

            <h4>6. PAYMENT REVERSALS, CHARGEBACKS & DISPUTES</h4>
            <ul>
                <li>
                    Any payment reversal, chargeback, or dispute raised through banks or payment gateways:
                    <ul>
                        <li>shall result in immediate suspension of access to Services;</li>
                        <li>may lead to permanent account termination.</li>
                    </ul>
                </li>
                <li>TutorExel reserves the right to recover dues, administrative costs, and penalties arising from chargebacks.</li>
            </ul>

            <hr />

            <h4>7. REFUND PROCESSING</h4>
            <ul>
                <li>Approved refunds shall be processed using the original payment method only.</li>
                <li>
                    Refund timelines depend on:
                    <ul>
                        <li>payment gateway,</li>
                        <li>banking partner,</li>
                        <li>regulatory timelines.</li>
                    </ul>
                </li>
                <li>TutorExel does not guarantee immediate refunds and shall not be responsible for delays caused by third parties.</li>
            </ul>

            <hr />

            <h4>8. TAXES & FEES</h4>
            <ul>
                <li>Taxes already deposited with authorities are non-refundable, unless required by law.</li>
                <li>Payment gateway fees and administrative charges are non-refundable.</li>
            </ul>

            <hr />

            <h4>9. NON-TRANSFERABILITY</h4>
            <ul>
                <li>
Course Fees are non-transferable:
                    <ul>
                        <li>between Students,</li>
                        <li>between Courses,</li>
                        <li>between academic years or programs.</li>
                    </ul>
                </li>
            </ul>

            <hr />

            <h4>10. EXCLUSIONS</h4>
            <p>No refund shall be granted due to:</p>
            <ul>
                <li>change of mind;</li>
                <li>dissatisfaction with teaching style;</li>
                <li>academic performance or results;</li>
                <li>internet or device issues at the Student’s end;</li>
                <li>scheduling conflicts or personal reasons.</li>
            </ul>

            <hr />

            <h4>11. FINAL AUTHORITY</h4>
            <ul>
                <li>All refund and cancellation decisions rest solely with TutorExel.</li>
                <li>TutorExel’s determination shall be final and binding, subject to applicable law.</li>
            </ul>

            <hr />

            <h4>12. GOVERNING LAW & JURISDICTION</h4>
            <p>This Policy shall be governed by and construed in accordance with the laws of India.</p>
            <p>Any dispute arising under this Policy shall be resolved through:</p>
            <ul>
                <li>arbitration under the Arbitration and Conciliation Act, 1996;</li>
                <li>seat and venue: Ahmedabad, India;</li>
                <li>language: English.</li>
            </ul>
            <p>Courts at Ahmedabad shall have exclusive jurisdiction, subject to arbitration.</p>

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
                            
export default RefundPage;