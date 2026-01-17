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
                                    <p><b>Effective Date: </b>19th January 2026</p>

                                    <hr />

                                    <p>This Privacy Policy (“<b>Privacy Policy</b>” or “<b>Policy</b>”) discloses the privacy practices of <b>TutorExel LLP</b>, a limited liability partnership registered under the laws of India (“<b>TutorExel</b>”, “<b>We</b>”, “<b>we</b>”, “<b>Us</b>” or “<b>us</b>”), with respect to the collection, use, storage, processing, and disclosure of Personal Information (as defined below) of parents, guardians, students, instructors, vendors, employees, and users (“<b>You</b>”, “<b>you</b>”, “<b>Your</b>” or “<b>your</b>”) through its online platform <a href="https://www.tutorexel.com/">www.tutorexel.com</a> (“<b>Website</b>”), TutorExel’s white-labelled learning platforms, applications, and related digital interfaces (collectively, the “<b>Platform</b>”).</p>
                                    <p>This Privacy Policy, together with the <b>Terms & Conditions</b>, describes TutorExel’s practices regarding how we collect, store, use, share, secure, and otherwise process your Personal Information. It also explains your choices with respect to access, correction, and use of your Personal Information, your rights under applicable laws, and how you may contact TutorExel in case of any grievance or complaint.</p>

                                    <hr />

        <h4>CONSENT</h4>
        <p>By providing your consent to this Privacy Policy and accepting TutorExel’s Terms & Conditions, you expressly agree to the collection, use, processing, storage, and transfer of your Personal Information as described in this Privacy Policy.</p>
        <p>If you do not agree with the terms of this Privacy Policy, please do not access or use the Website, Platform, or Services.</p>
        <p>TutorExel may review and update this Privacy Policy periodically to ensure continued compliance with legal, regulatory, and operational requirements.</p>
        <ul>
          <li>If you are a <b>visitor</b>, this Policy may be updated without prior notice.</li>
          <li>If you are a <b>registered user</b>, TutorExel will notify you of material changes and provide you an opportunity to review the revised Policy before continuing to use the Services.</li>
          
        </ul>
        <p>Your continued use of the Platform after such updates constitutes acceptance of the revised Privacy Policy.</p>

        <hr />

        <h4>DEFINITION OF PERSONAL INFORMATION</h4>
        <p><b>“Personal Information”</b> means any information that can identify you directly or indirectly, either on its own or when combined with other information. This includes, where applicable, <b>sensitive personal data or information</b> as defined under Indian laws and other applicable data protection regulations.</p>

        <hr />

        <h2><u>COLLECTION OF INFORMATION</u></h2>
        <h4>Visitors</h4>
        <p>As a visitor, you may browse the Website without providing any Personal Information. However, when you access the Website, TutorExel may automatically collect and store certain non-personal and technical information for security, analytics, and operational purposes, including but not limited to:</p>
        <ul>
            <li>IP address</li>
            <li>browser type</li>
            <li>operating system</li>
            <li>device identifiers</li>
            <li>referring URLs</li>
            <li>pages visited</li>
            <li>date and time of access</li>
        </ul>
        <p>This information is used to analyze trends, administer the Website, enhance security, and improve user experience.</p>

        <hr />

        <h4>Registered Users (Parents / Guardians / Students)</h4>
        <p>TutorExel collects Personal Information when you:</p>
        <ul>
          <li>register on the Platform;</li>
          <li>enrol a Student in any Course;</li>
          <li>express interest in TutorExel’s Services;</li>
          <li>interact with tutors or support teams;</li>
          <li>participate in assessments, quizzes, or feedback;</li>
          <li>communicate with TutorExel through chat, email, phone, or messaging platforms.</li>
        </ul>
        <p>TutorExel collects Personal Information <b>only where there is a lawful basis</b>, including:</p>
        <ul>
            <li>performance of a contract;</li>
            <li>compliance with legal or regulatory obligations;</li>
            <li>legitimate business interests;</li>
            <li>explicit consent provided by you.</li>
        </ul>

        <hr />

        <h4>Types of Personal Information Collected</h4>
        <p>The Personal Information collected may include, but is not limited to:</p>
        <h5>Contact & Account Information</h5>
        <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Display picture</li>
            <li>Mailing address</li>
            <li>Country, city, and geographic location</li>
        </ul>
        <h5>Identity & Verification Information</h5>
        <ul>
            <li>Date of birth</li>
            <li>Academic records or mark sheets (where required)</li>
            <li>Government-issued identification details (only where legally required or explicitly provided)</li>
        </ul>
        <h5>Billing & Transaction Information</h5>
        <ul>
            <li>Billing address</li>
            <li>Payment transaction references</li>
            <li>Invoices and receipts</li>
        </ul>
        <p>TutorExel does <b>not</b> store debit/credit card details. All payments are processed through secure third-party payment gateways such as Razorpay or other authorised providers.</p>
        <h5>Account Credentials</h5>
        <ul>
            <li>Username</li>
            <li>Password (stored in encrypted form)</li>
        </ul>
        <h5>Academic & Preference Information</h5>
        <ul>
            <li>Grade / year level</li>
            <li>Course preferences</li>
            <li>Syllabus selection</li>
            <li>Assessment performance</li>
            <li>Progress reports</li>
            <li>Learning behaviour and completion status</li>
        </ul>
        <h5>Support & Interaction Information</h5>
        <ul>
            <li>Chat transcripts</li>
            <li>Email correspondence</li>
            <li>Call recordings (where applicable)</li>
            <li>Feedback, surveys, testimonials</li>
        </ul>

        <hr />

        <h4>Platform Usage & Device Information</h4>
        <p>TutorExel collects information related to your interaction with the Platform, including:</p>
        <ul>
          <li>classes attended</li>
          <li>worksheets and learning material accessed</li>
          <li>recorded sessions viewed</li>
          <li>search queries</li>
          <li>device identifiers</li>
          <li>browser and software configuration</li>
          <li>log files</li>
          <li>cookies and similar technologies</li>
        </ul>
        <p>This data helps TutorExel track learning progress, improve course delivery, enhance platform performance, and provide personalised educational experiences.</p>

        <hr />

        <h4>Payments & Financial Transactions</h4>
        <p>If you use any paid Services, payment options such as bank transfer, UPI, debit card, or credit card may be presented. All card-based payments are redirected to secure third-party payment gateways.</p>
        <p>TutorExel:</p>
        <ul>
            <li>does not store full card numbers;</li>
            <li>does not have access to payment gateway credentials;</li>
            <li>may retain limited transaction references for accounting and compliance purposes.</li>
        </ul>

        <hr />

        <h4>Public Display of Information</h4>
        <p>The Student’s or Parent’s <b>first name, display picture, grade level, or feedback</b> may be visible on the Platform or used internally for academic purposes. Any broader public use (such as testimonials or success stories) is done only with consent, as per TutorExel’s Terms & Conditions.</p>
        
        <hr />

        <h2><u>USAGE AND RETENTION OF INFORMATION</u></h2>
        <p>TutorExel uses the Personal Information collected from you strictly in accordance with this Privacy Policy and only where such use is necessary for the purposes described herein, including where it is required to:</p>
        <ul>
            <li>deliver the Services requested by you;</li>
            <li>perform obligations arising from contracts entered into with you;</li>
            <li>comply with applicable legal, regulatory, or contractual obligations;</li>
            <li>protect TutorExel’s legitimate business interests; or</li>
            <li>exercise or defend legal claims.</li>
        </ul>
        <p>TutorExel retains Personal Information only for as long as it is reasonably necessary to fulfil the purposes for which it was collected, or as required under applicable laws, regulations, or contractual obligations. Once the purpose for which the information was collected has been fulfilled, or upon expiry of statutory retention periods, such Personal Information shall be securely deleted or anonymised, unless retention is required for legal, regulatory, audit, or dispute-resolution purposes.</p>

        <hr />

        <h4>USE OF PERSONAL INFORMATION</h4>
        <p>TutorExel uses Personal Information for the following purposes:</p>
        <ul>
            <li>to provide, operate, analyse, administer, and improve the Services;</li>
            <li>to manage enrolments, schedules, assessments, reports, and academic delivery;</li>
            <li>to personalise learning experiences based on Student level, preferences, and performance;</li>
            <li>to communicate with Parents, Guardians, and Students regarding classes, progress, schedules, and platform updates;</li>
            <li>to provide customer support and respond to queries or grievances;</li>
            <li>to process payments, issue invoices, and maintain accounting records;</li>
            <li>to enforce TutorExel’s Terms & Conditions and related policies;</li>
            <li>to detect, prevent, investigate, and mitigate fraudulent, unlawful, or unauthorised activities;</li>
            <li>to ensure platform security, integrity, and operational continuity.</li>
        </ul>

        <hr />

        <h4>COMMUNICATION & MARKETING</h4>
        <p>TutorExel may use your Personal Information to communicate with you through email, phone calls, SMS, WhatsApp, platform notifications, or other permitted communication channels for purposes including:</p>
        <ul>
            <li>service-related updates and operational communications;</li>
            <li>class reminders, assessments, and academic notifications;</li>
            <li>information about new features, courses, or offerings;</li>
            <li>surveys, feedback requests, and service improvement initiatives;</li>
            <li>promotional or marketing communications, where permitted by law.</li>
        </ul>
        <p>You may opt out of promotional communications at any time by following the unsubscribe instructions provided in such communications or by contacting TutorExel through official support channels. However, opting out of promotional communication does not affect TutorExel’s ability to send essential service-related or transactional communications.</p>

        <hr />
        
        <h4>LOCATION, DEVICE & SERVICE ANALYTICS</h4>
        <p>TutorExel may use Personal Information and usage data to:</p>
        <ul>
            <li>determine general geographic location;</li>
            <li>offer location-appropriate services or schedules;</li>
            <li>analyse learning patterns and platform performance;</li>
            <li>optimise course content and delivery methods;</li>
            <li>identify internet service provider or device-level issues affecting access.</li>
        </ul>
        <p>Such information is used in aggregated or anonymised form wherever feasible and is not used to identify individuals unless required for service delivery or legal compliance.</p>

        <hr />

        <h4>EMPLOYEES, INSTRUCTORS & INTERNAL USERS</h4>
        <p>If you are an employee, instructor, consultant, or contractor engaged by TutorExel, your Personal Information may be used for purposes including:</p>
        <ul>
            <li>onboarding and identity verification;</li>
            <li>payroll processing and statutory deductions;</li>
            <li>attendance tracking and performance management;</li>
            <li>compliance with labour, tax, and employment laws;</li>
            <li>provisioning of benefits or reimbursements, where applicable.</li>
        </ul>
        <p>Such information is accessed internally only on a strict need-to-know basis.</p>

        <hr />

        <h4>VENDORS & SERVICE PROVIDERS</h4>
        <p>If you are a vendor, supplier, or service provider to TutorExel, your Personal Information may be used for:</p>
        <ul>
            <li>contractual engagement and communication;</li>
            <li>payment processing and tax deduction;</li>
            <li>regulatory compliance;</li>
            <li>audit and accounting purposes.</li>
        </ul>
        
        <hr />

        <h4>COMMUNITY FEATURES & USER INTERACTIONS</h4>
        <p>TutorExel may offer features that enable interaction between users, such as group classes, discussion forums, chat features, or collaborative learning environments.</p>
        <p>You are advised to exercise caution and discretion while sharing any Personal Information in public or semi-public areas of the Platform. Any Personal Information shared in such spaces may be viewed, collected, or used by other users, and TutorExel shall not be responsible for misuse of such information by third parties.</p>
        <p>TutorExel does not control or monitor all user-generated interactions and shall not be liable for any unsolicited communication or misuse arising from information voluntarily disclosed by users.</p>

        <hr />
        
        <h2>SHARING AND DISCLOSING PERSONAL INFORMATION</h2>
        <p>TutorExel may engage third-party companies, agents, consultants, contractors, or service providers (“<b>Service Providers</b>”) to perform services on its behalf or to assist in providing the Services to you.</p>
        <p>These Service Providers may be engaged for purposes including, but not limited to:</p>
        <ul>
            <li>marketing, advertising, and communications;</li>
            <li>hosting, infrastructure, and IT services;</li>
            <li>learning management systems and video-conferencing tools;</li>
            <li>payment processing and financial reconciliation;</li>
            <li>customer support and grievance handling;</li>
            <li>analytics, data enhancement, and service optimisation;</li>
            <li>academic reporting and assessment tools;</li>
            <li>surveys, feedback collection, and research activities.</li>
        </ul>
        <p>In the course of providing such services, Service Providers may have access to Personal Information strictly to the extent necessary to perform their contractual obligations. TutorExel does <b>not</b> authorise such Service Providers to use or disclose Personal Information for any purpose other than providing services to TutorExel, and all such Service Providers are contractually bound to maintain appropriate confidentiality and security safeguards.</p>

        <hr />

        <h4>INTERNAL SHARING</h4>
        <p>If you are an employee, instructor, consultant, vendor, or supplier of TutorExel, your Personal Information may be shared internally within TutorExel only on a <b>need-to-know basis</b> with relevant departments such as operations, finance, compliance, human resources, or academic teams, solely for legitimate business, legal, or regulatory purposes.</p>

        <hr />

        <h4>TESTIMONIALS, RESULTS & PROMOTIONAL DISCLOSURE</h4>
        <p>If you are a user of TutorExel’s Services, including a Student enrolled through a Parent or Guardian, you acknowledge and agree that TutorExel may, with appropriate consent, use and disclose limited Personal Information such as:</p>
        <ul>
            <li>first name;</li>
            <li>grade or year level;</li>
            <li>testimonials or feedback;</li>
            <li>academic progress indicators or scores (non-sensitive);</li>
            <li>success stories or learning outcomes,</li>
        </ul>
        <p>for purposes including academic reporting, marketing, promotional publicity, business strategy, and service outreach.</p>
        <p>Such disclosures may be made across various media formats, including but not limited to:</p>
        <ul>
            <li>TutorExel’s Website and Applications;</li>
            <li>social media platforms;</li>
            <li>digital advertisements;</li>
            <li>presentations, interviews, or educational communications.</li>
        </ul>
        <p>Where the user is a minor, the Parent or Guardian expressly consents, for and on behalf of the Student, to such use and disclosure in accordance with TutorExel’s Terms & Conditions and this Privacy Policy.</p>
        <p>TutorExel does not disclose sensitive personal data or identification documents for promotional purposes.</p>

        <hr />

        <h4>CROSS-BORDER DATA TRANSFERS</h4>
        <p>TutorExel operates and processes data primarily in India.</p>
        <p>If you are accessing TutorExel’s Services from outside India, including from the <b>European Economic Area (EEA), the United Kingdom, Australia, or Switzerland,</b> you acknowledge and agree that your Personal Information may be transferred to, stored, and processed in India in accordance with applicable Indian data protection laws.</p>
        <p>By submitting your Personal Information and/or using the Services, you expressly consent to such cross-border transfer, storage, and processing.</p>

        <hr />

        <h2><u>SECURITY OF PERSONAL INFORMATION</u></h2>
        <p>TutorExel endeavours to implement reasonable technical, administrative, and organisational safeguards to protect Personal Information both online and offline, and to reduce the risks of loss, misuse, unauthorised access, disclosure, alteration, or destruction.</p>
        <p>Security measures may include:</p>
        <ul>
            <li>SSL encryption and secure connections;</li>
            <li>access-controlled servers and databases;</li>
            <li>firewalls and network security controls;</li>
            <li>restricted internal access on a need-to-know basis;</li>
            <li>password encryption and authentication controls.</li>
        </ul>
        <p>Despite these measures, no method of transmission or storage is completely secure. TutorExel does not guarantee absolute security of Personal Information and shall not be held liable for unauthorised access beyond its reasonable control.</p>
        <p>If you believe your account or Personal Information has been compromised, you must notify TutorExel immediately through official support channels.</p>

        <hr />

        <h4>NO SALE OR UNAUTHORISED COMMERCIAL DISCLOSURE</h4>
        <p>TutorExel does not sell, rent, trade, or commercially exploit your Personal Information to third parties for their independent marketing purposes without your explicit consent.</p>
        <p>TutorExel uses Personal Information strictly in accordance with this Privacy Policy and treats protection of user privacy as a core operational principle.</p>

        <hr />

        <h4>DATA STORAGE LOCATION</h4>
        <p>TutorExel stores and processes Personal Information on secure servers located in India, protected by appropriate physical, technical, and administrative safeguards. TutorExel may engage third-party auditors or service providers to support security and compliance efforts.</p>
        <p>If you do not consent to the storage or processing of Personal Information in India, you should not use the Website, Applications, or Services.</p>

        <hr />

        <h4>LAWFUL DISCLOSURE</h4>
        <p>Notwithstanding anything contained in this Privacy Policy, TutorExel reserves the right to disclose Personal Information where required to do so:</p>
        <ul>
            <li>under applicable law or regulation;</li>
            <li>pursuant to a court order, subpoena, or governmental request;</li>
            <li>to enforce TutorExel’s Terms & Conditions or investigate violations;</li>
            <li>to protect the rights, property, or safety of TutorExel, its users, or the public;</li>
            <li>to prevent fraud, security breaches, or unlawful activity.</li>
        </ul>
        <p>Such disclosures shall be made strictly in compliance with applicable legal requirements.</p>
        
        <hr />

        <h2><u>KEEPING YOUR PERSONAL INFORMATION SECURE</u></h2>
        <p>TutorExel has implemented appropriate technical, administrative, and organisational security measures to safeguard Personal Information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.</p>
        <p>Processing of Personal Information is carried out only by authorised personnel and service providers who are subject to confidentiality obligations. TutorExel also maintains internal procedures to identify, assess, and respond to suspected data security breaches.</p>
        <p>Where required under applicable law, TutorExel will notify affected users and/or relevant regulatory authorities of a data breach within the legally prescribed timelines.</p>
        <p>Notwithstanding the foregoing, you acknowledge that no method of transmission over the internet or method of electronic storage is completely secure. Accordingly, TutorExel does not guarantee absolute security of Personal Information. By accessing or using the Website, Applications, or Services, you expressly acknowledge and agree that you shall not hold TutorExel liable or initiate legal action solely on account of any unauthorised access or data breach, except where such breach is directly attributable to TutorExel’s wilful misconduct or gross negligence.</p>

        <hr />

        <h2>COOKIES</h2>
        <p>TutorExel uses cookies and similar technologies, which are small files containing a string of characters, stored on your browser or device, to enable the Platform to recognise users, store preferences, and enhance overall user experience.</p>
        <p>Cookies help TutorExel to:</p>
        <ul>
            <li>remember login preferences;</li>
            <li>analyse usage trends;</li>
            <li>personalise content and course recommendations;</li>
            <li>improve Platform performance and security.</li>
        </ul>
        <p>TutorExel’s Website and Applications use cookies to identify the areas of the Platform that you have visited. A cookie does not collect Personal Information by itself, and TutorExel does not place sensitive Personal Information in cookies.</p>
        <p>Most web browsers allow you to control or disable cookies through browser settings. However, disabling cookies may limit or prevent access to certain features or functionality of the Platform.</p>

        <hr />

        <h2><u>THIRD PARTIES AND LINKS</u></h2>
        <p>TutorExel may share Personal Information with other entities within its corporate group, affiliates, or related entities, where necessary for legitimate business or operational purposes and subject to appropriate safeguards.</p>
        <p>TutorExel may also share Personal Information with agents, subcontractors, or service providers to assist in:</p>
        <ul>
            <li>delivering Services;</li>
            <li>processing payments;</li>
            <li>analysing data;</li>
            <li>providing customer support;</li>
            <li>marketing or communication activities.</li>
        </ul>
        <p>TutorExel may exchange information with third parties for purposes such as fraud prevention, security verification, and credit risk reduction.</p>
        <p>In the event of a merger, acquisition, sale of assets, or business restructuring, TutorExel may transfer databases containing Personal Information to the relevant third party, subject to confidentiality obligations.</p>
        <p>Except as expressly stated in this Privacy Policy, TutorExel does not sell or disclose Personal Information to third parties without prior consent, unless required to do so under applicable law.</p>
        <p>The Platform may contain advertisements, links, or frames directing you to third-party websites. TutorExel is not responsible for the privacy practices, content, or policies of such third-party websites. Any access to third-party websites is at your own risk.</p>
        <p>Such third-party websites are governed by their own privacy policies, and TutorExel encourages you to review those policies before providing any Personal Information.</p>

        <hr />

        <h2><u>CONSULTING AND THIRD-PARTY SUPPORT SERVICES</u></h2>
        <p>TutorExel may engage third parties to assist with:</p>
        <ul>
            <li>service fulfilment;</li>
            <li>payment processing;</li>
            <li>monitoring Platform activity;</li>
            <li>conducting surveys or research;</li>
            <li>maintaining databases;</li>
            <li>administering communications and content;</li>
            <li>generating aggregate or comparative analytics relating to Platform performance.</li>
        </ul>
        <p>These third parties are provided access to Personal Information strictly on a need-to-know basis and are contractually obligated to protect confidentiality and security.</p>

        <hr />

        <h2><u>CHOICE AND COMMUNICATION PREFERENCES</u></h2>
        <p>You may customise how TutorExel uses your Personal Information for communication purposes, including preferences relating to:</p>
        <ul>
            <li>marketing communications;</li>
            <li>promotional updates;</li>
            <li>personalised recommendations;</li>
            <li>account sign-in persistence.</li>
        </ul>
        <p>If you do not wish to receive promotional or marketing communications, you may:</p>
        <ul>
            <li>unsubscribe using the link provided in such communications; or</li>
            <li>update your communication preferences; or</li>
            <li>contact TutorExel via chat, email, WhatsApp, or phone to request suppression of promotional messages.</li>
        </ul>
        <p>Please note that opting out of marketing communications does not affect TutorExel’s ability to send service-related, transactional, or legally required communications.</p>
        <p>TutorExel does not sell or rent Personal Information to third parties for their marketing purposes without explicit consent.</p>

        <hr />

        <h2><u>OWNERSHIP OF RIGHTS</u></h2>
        <p>All intellectual property rights, including copyrights, trademarks, service marks, logos, and proprietary content available on or through the Website, Applications, and Services are owned by or licensed to TutorExel LLP, unless otherwise stated.</p>
        <p>You may access and use the Platform and its content solely for your personal, non-commercial educational purposes. Any copying, reproduction, storage, modification, distribution, transmission, display, publication, sale, licensing, or creation of derivative works for commercial or public purposes is strictly prohibited without prior written permission from TutorExel.</p>
        <p>The Platform contains copyrighted material, proprietary content, and intellectual property protected under applicable laws. TutorExel retains copyright in the selection, coordination, arrangement, and enhancement of such content.</p>
        <p>Downloading or accessing content does not grant you any ownership rights in such content.</p>
        <p>By submitting any content (including feedback, comments, testimonials, or materials) to any public or interactive area of the Platform, you represent and warrant that you have all necessary rights to do so and grant TutorExel a worldwide, royalty-free, perpetual, irrevocable, non-exclusive licence to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the Services.</p>
        <p>If you become aware of any infringement or misuse of TutorExel’s intellectual property or violation of these terms, you may report the same through TutorExel’s official support or grievance channels.</p>

        <hr />

        <h2><u>YOUR RIGHTS IN RELATION TO PERSONAL INFORMATION COLLECTED BY US</u></h2>
        <p>Subject to applicable laws, you have the right to withdraw your consent to the collection, use, or processing of your Personal Information at any time by submitting a written request to TutorExel through the contact details provided below.</p>
        <p>Please note that:</p>
        <ul>
            <li>withdrawal of consent shall operate prospectively only; and</li>
            <li>such withdrawal may result in TutorExel being unable to provide certain Services.</li>
        </ul>
        <p>You may write to TutorExel to:</p>
        <ul>
            <li>access your Personal Information;</li>
            <li>review or correct inaccurate or incomplete Personal Information;</li>
            <li>request deletion of Personal Information, subject to legal and contractual obligations; or</li>
            <li>withdraw consent for future processing.</li>
        </ul>
        <p>TutorExel is not responsible for verifying the accuracy of Personal Information provided by you and relies on information furnished by Parents, Guardians, or users in good faith.</p>
        <p>You acknowledge and agree that your rights to access, modify, delete, or withdraw consent may be restricted or denied where required under applicable law, regulatory requirements, judicial proceedings, or lawful requests by governmental or law-enforcement authorities.</p>

        <hr />

        <h2><u>CONDITIONS OF USE</u></h2>
        <p>TutorExel does not warrant that the Website, Applications, servers, or communications sent by TutorExel or on its behalf are free of viruses, malware, or other harmful components.</p>
        <p>To the maximum extent permitted by applicable law, TutorExel shall not be liable for any damages arising from use of or inability to use the Website, Applications, or Services, including but not limited to:</p>
        <ul>
            <li>direct or indirect damages;</li>
            <li>incidental, punitive, or consequential damages;</li>
            <li>loss of data, goodwill, business opportunity, income, or profits;</li>
            <li>damage to property; or</li>
            <li>claims of third parties.</li>
        </ul>
        <p>Your use of the Platform is entirely at your own risk and subject to TutorExel’s Terms & Conditions.</p>

        <hr />

        <h2><u>DATA PROTECTION CONTACT / GRIEVANCE REDRESSAL</u></h2>
        <p>Any questions, discrepancies, complaints, or grievances relating to the processing of Personal Information may be addressed to TutorExel’s designated grievance contact:</p>
        <p><b>Data Protection & Privacy Contact</b></p>
        <p><b>TutorExel LLP</b></p>
        <p>📧 <a href="mailto:info@tutorexel.com">info@tutorexel.com</a></p>
        <p>TutorExel shall endeavour to respond to all legitimate requests and grievances within a reasonable timeframe, as required under applicable law.</p>

        <hr />

        <h2><u>CONSENT TO THIS PRIVACY POLICY</u></h2>
        <p>This Privacy Policy forms an integral part of TutorExel’s Terms & Conditions, which are incorporated herein by reference in their entirety.</p>
        <p>By accessing or using the Website, Applications, or Services, you expressly consent to the collection, use, processing, storage, disclosure, and transfer of your Personal Information as described in this Privacy Policy.</p>

        <hr />

        <h2><u>GENERAL PROVISIONS</u></h2>
        <h4>Modification</h4>
        <p>TutorExel reserves the right to modify or update this Privacy Policy at any time without prior notice to visitors.</p>
        <p>If you are a registered user, material changes may be communicated through the Platform or via registered communication channels. Continued use of the Services after such modification shall constitute acceptance of the revised Privacy Policy.</p>
        <p>If you do not agree to the modified Privacy Policy, you may discontinue use of the Services and request account closure, subject to applicable laws and contractual obligations.</p>

        <hr />

        <h4>Camera, Microphone & Recording Consent</h4>
        <p>By enrolling in TutorExel’s Services, you expressly consent to:</p>
        <ul>
            <li>camera and microphone access during online classes;</li>
            <li>recording of classes for academic delivery, quality monitoring, training, or student revision purposes;</li>
        </ul>
        <p>provided such recordings are used in accordance with this Privacy Policy and TutorExel’s Terms & Conditions.</p>

        <hr />

        <h4>DISCLOSURE OF INFORMATION BY TUTOREXEL</h4>
        <p>TutorExel may disclose Personal Information:</p>
        <ul>
            <li>as required by law, regulation, subpoena, or court order;</li>
            <li>to enforce applicable Terms & Conditions or investigate potential violations;</li>
            <li>where TutorExel believes in good faith that such disclosure is necessary to protect its rights, users, or public safety;</li>
            <li>to prevent or investigate fraud, security incidents, or technical issues;</li>
            <li>with trusted service providers acting on TutorExel’s behalf under confidentiality obligations;</li>
            <li>internally with relevant departments for legitimate business, payroll, tax, compliance, or operational purposes;</li>
            <li>to protect against imminent harm to the rights, property, or safety of TutorExel, its users, or the public.</li>
        </ul>

        <hr />

        <h2><u>GOVERNING LAW AND JURISDICTION</u></h2>
        <p>This Privacy Policy shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>
        <p>Any dispute arising out of or in connection with this Privacy Policy shall be:</p>
        <ul>
            <li>referred to <b>arbitration</b> in accordance with the Arbitration and Conciliation Act, 1996;</li>
            <li>conducted by a sole arbitrator mutually appointed by the parties;</li>
            <li>held in <b>Ahmedabad, India;</b></li>
            <li>conducted in the English language.</li>
        </ul>
        <p>The arbitral award shall be final and binding.</p>
        <p>Subject to arbitration, courts located in <b>Ahmedabad, India,</b> shall have exclusive jurisdiction.</p>


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