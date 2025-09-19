import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import icas from '../../assets/images/icas.png';
import card1 from '../../assets/images/icas_card1.png';
import card2 from '../../assets/images/icas_card2.png';
import card3 from '../../assets/images/icas_card3.png';
import card4 from '../../assets/images/icas_card4.png';
import icasprim from '../../assets/images/icas-primary.png';
import icaseco from '../../assets/images/icas-secondary.png';

// Import reusable components
import ExamTitle from '../../components/ui/ExamTitle';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import ChooseLevel from '../../components/ui/ChooseLevel';
import CTASection from '../../components/ui/CTASection';
import ListItems from '../../components/ui/ListItems';

const tutoringFeatures = [
    { text: '', bold: 'Offered from Year 2 to Year 12 (we prepare for Years 2–10).' },
    { text: '', bold: 'Subjects: English, Mathematics, Science, Writing, Digital Technologies, and Spelling Bee (up to Year 6).' },
    { text: 'Delivered ', bold: 'online in August–September each year.' },
    { text: 'Results show how your child performs ', bold: 'against peers nationally and internationally.' },
];

const whyPrepMatter = [
    { 
        icon: card1, 
        title: 'Benchmarks students beyond school tests.'
    },
    { 
        icon: card2, 
        title: 'Recognised by many schools for gifted programs and scholarships.'
    },
    { 
        icon: card3, 
        title: 'Motivates students to stretch themselves in a positive way.' 
    },
    { 
        icon: card4, 
        title: 'Certificates awarded from Participation to High Distinction (top 1%).'
    },
];


const chooseLevel = [
    {
        icon: icasprim,
        title: 'Primary',
        subTitle: '(Years 2 - 6)',
        bgcolor: '#05AC8F',
        cardesc: 'Build strong foundations and test familiarity.',
        btnlink: '/exam-prep/icas/primary'
    },
    {
        icon: icaseco,
        title: 'Secondary',
        subTitle: '(Years 7 - 10)',
        bgcolor: '#22A3D2',
        cardesc: 'Sharpen reasoning, speed, and strategy for advanced challenges.',
        btnlink: '/exam-prep/icas/secondary'
    }
];

const points1 = [
    "Skills revision in English/Maths/Science.",
    "Weekly ICAS-style practice questions.",
    "Test-taking strategies (timing, elimination, problem-solving).",
    "1–2 simulated mock tests with detailed feedback."
];

const points2 = [
    "For confident students or those already in Tutorexel classes.",
    "Includes a full simulated ICAS test + results + recommendations.",
    "Students can upgrade into Prep classes if extra support is needed."
];

const IcasPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='icas-page'>
            <ExamTitle 
                title="ICAS Preparation for Years 2–10"
                customClass = "desktopview"
            />
            <ExamTitle 
                title="ICAS Preparation for – (Years 2–10)" 
                customClass = "mobileview"
            />
            <FeatureSection
                imagePosition="right"
                image={icas}
                headingText="What is ICAS?"
                descriptionText={<>The International Competitions and Assessments for Schools (ICAS), run by UNSW Global, is an annual test that challenges students in <strong>higher-order thinking and problem-solving skills.</strong></>}
                showButton={false}
                features={tutoringFeatures}
            />

            {/* Preparation matter section */}
            <div className="nap-matter">
                <TrustSection
                    headingText="Why ICAS Matters"
                    cardsData={whyPrepMatter}
                />
            </div>

            {/* Content Section */}
            <section className="py-2 bg-white">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="mb-5 mt-5">
                                <h3 className="section-heading">Why ICAS Feels Challenging</h3>
                                <div className="text-secondary mt-2">ICAS is taken in <b>August–September,</b> but the test covers the <b>whole year’s curriculum expectations.</b> This means your child may see topics from <b>later in the year,</b> not just what’s been taught by Term 3. That’s why preparation matters — it gives students the skills and confidence to handle unfamiliar questions.</div>
                            </div>
                            <div className='mt-5'>
                                <h3 className="section-heading">How Tutorexel Prepares Students</h3>
                                <div className="course-content-section">
                                    <p>At Tutorexel, ICAS-style practice is naturally built into our <b>regular English, Maths, and Science tuition.</b> Through worksheets, homework, and assignments, your child is already developing the reasoning and problem-solving skills ICAS tests — often without realising it.</p>
                                    <p>From <b>June onwards,</b> we also run dedicated ICAS programs:</p>
                                    <ListItems 
                                        subtitle="ICAS Prep + Mock Test"
                                        pointsData={points1}
                                    />
                                    <ListItems 
                                        subtitle="Mock Test Only"
                                        pointsData={points2}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Choose level */}
            <div className="card-level">
                <ChooseLevel 
                    headingText = "Choose Your Level"
                    boxData = {chooseLevel}
                    buttonText = 'Get Started'
                />
            </div>

            {/* CTA */}
            <div className="nap-cta">
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
    );
}

export default IcasPage;