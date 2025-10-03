import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import logo from '../../assets/images/logo.svg';
import icasTecher from '../../assets/images/icas_primary_teacher.png';
import icard1 from '../../assets/images/np_card2.png';
import icard2 from '../../assets/images/np_card1.png';
import icard3 from '../../assets/images/ns_card1.png';
import icover1 from '../../assets/images/icover_1.png';
import icover2 from '../../assets/images/icover_2.png';
import icover3 from '../../assets/images/icover_3.png';
import icover4 from '../../assets/images/np_cover2.png';
import icover5 from '../../assets/images/np_cover3.png';
import icover6 from '../../assets/images/icover_4.png';

// Import reusable components
import ExamTitle from '../../components/ui/ExamTitle';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import WhatWeCover from '../../components/ui/WhatWeCover';
import CTASection from '../../components/ui/CTASection';
import ListItems from '../../components/ui/ListItems';

const whatWeCover = [
    { 
        icon: icover1, 
        title: 'English', 
        description: <>Reading comprehension, vocabulary,<br /> interpreting short texts.</>
    },
    { 
        icon: icover2, 
        title: 'Mathematics', 
        description: <>Number operations, fractions,<br /> measurement, geometry, graphs.</> 
    },
    { 
        icon: icover3, 
        title: 'Science', 
        description: <>Living things, materials, simple forces,<br /> Earth & space.</> 
    },
    { 
        icon: icover4, 
        title: 'Writing', 
        description: <>Planning and writing narrative or<br /> persuasive pieces.</>
    },
    { 
        icon: icover5, 
        title: 'Spelling Bee', 
        description: <>Word knowledge, spelling patterns<br /> (up to Year 6).</>
    },
    { 
        icon: icover6, 
        title: 'Digital Technologies', 
        description: <>Basic coding, algorithms, safe online<br /> practices (Years 3+).</>
    }
];

const icasP =  [
    { text: '', bold: 'Introduce ICAS-style reasoning questions early, in a supportive way.' },
    { text: '', bold: 'Use short practice sets to build familiarity without pressure.' },
    { text: '', bold: 'Provide mock tests so students know exactly what to expect.' },
    { text: '', bold: 'Share progress feedback with parents after each stage.' }
];

const points = [
    "Light ICAS-style exposure begins in our regular tuition throughout the year.",
    <>Dedicated ICAS Prep Programs run from <b>June to August</b> leading into the test window.</>,
    <>Students can choose <b>Prep + Mock</b> or <b>Mock Only</b> based on confidence.</>
];

const whyParent = [
    { 
        icon: icard1, 
        title: <>Age-appropriate support<br /> that makes ICAS feel<br /> achievable, not<br /> intimidating.</>
    },
    { 
        icon: icard2, 
        title: <>Personalised attention<br /> with one-to-one or group<br /> classes.</>
    },
    { 
        icon: icard3, 
        title: <>Programs designed to<br /> help children aim for<br /> Distinction and High<br /> Distinction.</>
    }
];

const IcasPrimary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='icas-p-page'>
            {/* SEO for Icas Primary Page */}
            <Helmet>
                <title>Primary ICAS Tutoring Online | Exam Preparation Australia</title>
                <meta
                    name="description"
                    content="Find ICAS primary tuition with TutorExel across Australia. We deliver primary-level ICAS tutoring & exam prep online with subject experts and practice tests."
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Primary ICAS Tutoring Online | Exam Preparation Australia" />
                <meta property="og:description" content="Find ICAS primary tuition with TutorExel across Australia. We deliver primary-level ICAS tutoring & exam prep online with subject experts and practice tests." />
                <meta property="og:image" content={logo} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tutorexel.com/prep-zone/icas/primary" />

                {/* Organization Schema */}
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "TutorExel",
                    "url": "https://www.tutorexel.com",
                    "logo": "https://www.tutorexel.com/assets/images/logo.svg",
                    "sameAs": [
                    "https://www.facebook.com/share/1Za9NLXEqM/",  
                    "https://www.instagram.com/tutorexellearning", 
                    ]
                })}
                </script>
            </Helmet>            
            <ExamTitle 
                title="ICAS Prep for Primary Students (Years 2–6)"
                customClass = "desktopview"
            />
            <ExamTitle 
                title="ICAS Prep for Primary Students – (Years 2–6)" 
                customClass = "mobileview"
            />

            <WhatWeCover 
                headingText = "What We Cover"
                stepsData = {whatWeCover}
                backgroundClass = "what_cover icas_cover"
                layout = "4"
            />

            <FeatureSection
                imagePosition="right"
                image={icasTecher}
                headingText="How We Help Students Succeed"
                showButton={false}
                features={icasP}
            />

            <section className="py-2 bg-white when-to-start">
                <Container>
                    <Row className="justify-content-center list-bg">
                        <Col lg={12}>
                            <ListItems 
                                title = "When to Start Preparation"
                                pointsData = {points}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="nap-matter">
                <TrustSection
                    headingText = "Why Parents Choose Tutorexel"
                    cardsData = {whyParent}
                    length = {4}
                />
            </div>

            {/* CTA */}
            <div className="nap-p-cta">
                <CTASection
                    headingText="Your journey to better starts here."
                    image={""}
                    primaryButtonText="Book Your Free Trial Class"
                    primaryButtonIcon={<FaArrowRight />}
                    primaryButtonTextColor="black"
                    secondaryButtonText="Contact Us to Learn More"
                    secondaryButtonIcon={<FaArrowRight />}
                    secondaryButtonTextColor="#FFFFFF"
                />
            </div>
            
        </main>
    )}

    export default IcasPrimary;