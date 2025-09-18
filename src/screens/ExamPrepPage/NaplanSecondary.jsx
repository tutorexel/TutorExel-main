import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import napTecher from '../../assets/images/naplan_secondary_teacher.png';
import npcard1 from '../../assets/images/ns_card1.png';
import npcard2 from '../../assets/images/np_card2.png';
import npcard3 from '../../assets/images/np_card1.png';
import npcover1 from '../../assets/images/np_cover1.png';
import npcover2 from '../../assets/images/np_cover2.png';
import npcover3 from '../../assets/images/np_cover3.png';
import npcover4 from '../../assets/images/np_cover4.png';

// Import reusable components
import ExamTitle from '../../components/ui/ExamTitle';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import WhatWeCover from '../../components/ui/WhatWeCover';
import CTASection from '../../components/ui/CTASection';
import ListItems from '../../components/ui/ListItems';

const whatWeCover = [
    { 
        icon: npcover1, 
        title: 'Reading', 
        description: "Work with longer and more complex texts, identify arguments, evaluate information, build speed and accuracy." 
    },
    { 
        icon: npcover2, 
        title: 'Writing', 
        description: "Strengthen persuasive and narrative writing, with clear structure, strong vocabulary, and effective editing." 
    },
    { 
        icon: npcover3, 
        title: 'Language Conventions', 
        description: 'Focus on advanced spelling patterns, punctuation, and grammar accuracy.' 
    },
    { 
        icon: npcover4, 
        title: 'Numeracy', 
        description: 'Apply algebra, proportional reasoning, geometry, statistics, and multi-step problem solving.' 
    }
];

const napSec =  [
    { text: '', bold: 'Diagnostic check to identify gaps in literacy and numeracy.' },
    { text: '', bold: 'Focused lessons that target key skills tested in NAPLAN.' },
    { text: '', bold: 'Timed practice activities to improve speed and accuracy.' },
    { text: '', bold: 'Full simulated practice tests with detailed feedback.' },
    { text: '', bold: 'Parent progress updates after every stage.' },
];

const points = [
    <>For <b>Year 7 students,</b> light preparation can begin in <b>Year 6 Term 4,</b> with focused work in Term 1 of Year 7.</>,
    <>For <b>Year 9 students,</b> prep is best started in <b>Year 8 Term 4,</b> continuing into Term 1 of Year 9.</>
];

const whyParent = [
    { 
        icon: npcard1, 
        title: 'Tailored support for secondary students who need more advanced practice.'
    },
    { 
        icon: npcard2, 
        title: 'Tutors experienced in bridging schoolwork with NAPLAN requirements.'
    },
    { 
        icon: npcard3, 
        title: 'Flexible learning options: one-to-one or group classes.' 
    }
];

const NaplanSecondary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='naplan-s-page'>
            <ExamTitle 
                title="Secondary NAPLAN Tutoring for Years 7 & 9"
            />

            <WhatWeCover 
                headingText = "What We Cover"
                stepsData = {whatWeCover}
                backgroundClass = "what_cover"
            />

            <FeatureSection
                imagePosition="right"
                image={napTecher}
                headingText="How We Help Students Succeed"
                showButton={false}
                features={napSec}
            />

            <section className="py-2 bg-white nap-sec-start">
                <Container>
                    <Row className="justify-content-center list-bg">
                        <Col lg={12}>
                            <ListItems 
                                title = "When to Start"
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
                    headingText="Experience the change today."
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

    export default NaplanSecondary;