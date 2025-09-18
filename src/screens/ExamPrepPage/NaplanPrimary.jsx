import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import napTecher from '../../assets/images/naplan_primary_teacher.png';
import npcard1 from '../../assets/images/np_card1.png';
import npcard2 from '../../assets/images/np_card2.png';
import npcard3 from '../../assets/images/np_card3.png';
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
        description: "Understand different text types, find main ideas, build vocabulary, answer comprehension questions clearly" 
    },
    { 
        icon: npcover2, 
        title: 'Writing', 
        description: "Plan and write effective short pieces in narrative and persuasive forms" 
    },
    { 
        icon: npcover3, 
        title: 'Language Conventions', 
        description: 'Practice spelling, punctuation, and grammar suitable for Year 3 and Year 5 levels' 
    },
    { 
        icon: npcover4, 
        title: 'Numeracy', 
        description: 'Strengthen number operations, problem solving, measurement, shapes, and graph interpretation' 
    }
];

const napPrim =  [
    { text: '', bold: 'Gentle introduction to the test format so children know what to expect.' },
    { text: '', bold: 'Short practice activities that mirror NAPLAN-style questions.' },
    { text: '', bold: 'Step-by-step writing guidance with feedback.' },
    { text: '', bold: 'Mock practice tests under timed conditions to build confidence.' },
    { text: '', bold: 'Regular updates to parents on progress and areas for improvement.' },
];

const points = [
    <>For <b>Year 3 students,</b> light preparation can begin in <b>Year 2,</b> with focused work in Term 1 of Year 3.</>,
    <>For <b>Year 5 students,</b> start in <b>Year 4 Term 4</b> or early in Year 5 for best results.</>
];

const whyParent = [
    { 
        icon: npcard1, 
        title: 'Benchmarks students beyond school tests.'
    },
    { 
        icon: npcard2, 
        title: 'Qualified tutors who understand the Australian Curriculum.'
    },
    { 
        icon: npcard3, 
        title: 'A supportive, encouraging environment that helps children feel capable, not pressured.' 
    }
];

const NaplanPrimary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main>
            <ExamTitle 
                title="Primary NAPLAN Tutoring for Years 3 & 5" 
                description="Support in English and Maths to help younger learners approach NAPLAN with confidence." 
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
                features={napPrim}
            />

            <section className="py-2 bg-white">
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
            <div className="nap-p-cta py-5">
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

    export default NaplanPrimary;