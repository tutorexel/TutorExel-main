import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import icasTecher from '../../assets/images/icas_secondary_teacher.png';
import icard1 from '../../assets/images/ns_card1.png';
import icard2 from '../../assets/images/np_card1.png';
import icard3 from '../../assets/images/icas_card5.png';
import icover1 from '../../assets/images/icover_1.png';
import icover2 from '../../assets/images/icover_2.png';
import icover3 from '../../assets/images/icover_3.png';
import icover4 from '../../assets/images/np_cover2.png';
import icover5 from '../../assets/images/icover_4.png';

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
        description: "Analysis of longer and complex texts, inference, evaluating arguments." 
    },
    { 
        icon: icover2, 
        title: 'Mathematics', 
        description: "Algebra, proportional reasoning, advanced geometry, statistics." 
    },
    { 
        icon: icover3, 
        title: 'Science', 
        description: 'Cells, ecosystems, energy transfer, chemical reactions, Earth systems.' 
    },
    { 
        icon: icover4, 
        title: 'Writing', 
        description: 'Strong persuasive and narrative writing with structure and precision.' 
    },
    { 
        icon: icover5, 
        title: 'Digital Technologies', 
        description: 'Text-based coding, data representation, networks, algorithms.' 
    }
];

const icasP =  [
    { text: 'Diagnostic check to see readiness in English, Maths, and Science.', bold: '' },
    { text: 'Timed practice tasks to improve accuracy and speed.', bold: '' },
    { text: <>Full <b>mock ICAS tests</b> with feedback and personalised strategies.</>, bold: '', },
    { text: 'Focus on exam techniques: elimination, reasoning, time management.', bold: '' }
];

const points = [
    "Light integration through the school year in our regular classes.",
    <>Focused Prep Program runs <b>June to August</b> each year.</>,
    <>Students can enrol in <b>Prep + Mock</b> or just take a <b>Mock Test Only</b> option.</>
];

const whyParent = [
    { 
        icon: icard1, 
        title: 'Secondary students need more than just content — they need strategies.'
    },
    { 
        icon: icard2, 
        title: 'Our tutors guide them through higher-order questions and reasoning challenges.'
    },
    { 
        icon: icard3, 
        title: 'Flexible learning options for busy secondary school schedules.' 
    }
];

const IcasSecondary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='icas-s-page'>

            <ExamTitle 
                title="ICAS Prep for Secondary Students (Years 7–10)"
                customClass = "desktopview"
            />
            <ExamTitle 
                title="ICAS Prep for Secondary Students – (Years 7–10)" 
                customClass = "mobileview"
            />

            <WhatWeCover 
                headingText = "What We Cover"
                stepsData = {whatWeCover}
                backgroundClass = "what_cover icas_cover icas_sec"
                layout = "4"
            />

            <FeatureSection
                imagePosition="right"
                image={icasTecher}
                headingText="How We Help Students Succeed"
                showButton={false}
                features={icasP}
            />

            <section className="py-2 bg-white">
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

    export default IcasSecondary;