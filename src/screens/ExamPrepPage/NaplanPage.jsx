import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ExamPrep.css';

import naplan from '../../assets/images/naplan.png';
import card1 from '../../assets/images/nap_card1.png';
import card2 from '../../assets/images/nap_card2.png';
import card3 from '../../assets/images/nap_card3.png';
import card4 from '../../assets/images/nap_card4.png';
import napaprch1 from '../../assets/images/nap_aprch1.png';
import napaprch2 from '../../assets/images/nap_aprch2.png';
import napaprch3 from '../../assets/images/nap_aprch3.png';
import napaprch4 from '../../assets/images/nap_aprch4.png';
import napprim from '../../assets/images/nap-primary.png';
import napseco from '../../assets/images/nap-secondary.png';

// Import reusable components
import ExamTitle from '../../components/ui/ExamTitle';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import HowItWorksSection from '../../components/ui/HowItWorksSection';
import ChooseLevel from '../../components/ui/ChooseLevel';
import CTASection from '../../components/ui/CTASection';

const tutoringFeatures = [
    { text: '', bold: 'Reading' },
    { text: '', bold: 'Writing' },
    { text: '', bold: 'Language Conventions (spelling, punctuation, grammar)' },
    { text: '', bold: 'Numeracy' },
];

const whyPrepMatter = [
    { 
        icon: card1, 
        title: <>Strengthen literacy<br /> and numeracy<br /> skills</>
    },
    { 
        icon: card2, 
        title: <>Become confident<br /> with NAPLAN-<br />style questions</>
    },
    { 
        icon: card3, 
        title: <>Learn simple<br /> strategies for<br /> managing time and<br /> exam pressure</> 
    },
    { 
        icon: card4, 
        title: <>Sit the test feeling<br /> calm and prepared</>
    },
];

const approach = [
    { 
        icon: napaprch1, 
        title: 'Initial Check', 
        description: <>We start with a skills assessment to see where your child stands.</> 
    },
    { 
        icon: napaprch2, 
        title: 'Personalised Lessons', 
        description: <>Tailored tutoring in literacy and numeracy, either one-to-one or in small groups.</> 
    },
    { 
        icon: napaprch3, 
        title: 'Practice & Feedback', 
        description: <>Guided practice tasks and mock tests with detailed review.</> 
    },
    { 
        icon: napaprch4, 
        title: 'Ongoing Support', 
        description: <>Regular progress updates for parents.</> 
    }
];

const chooseLevel = [
    {
        icon: napprim,
        title: 'Primary',
        subTitle: '(Years 3 & 5)',
        bgcolor: '#05AC8F',
        cardesc: <>Focus on building core literacy and<br /> numeracy foundations.</>,
        btnlink: '/prep-zone/naplan/primary'
    },
    {
        icon: napseco,
        title: 'Secondary',
        subTitle: '(Years 7 & 9)',
        bgcolor: '#22A3D2',
        cardesc: <>Focus on advanced skills, reasoning, and<br /> exam strategies.</>,
        btnlink: '/prep-zone/naplan/secondary'
    }
];

const NaplanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main className='naplan-page'>
            {/* SEO for Naplan Page */}
            <Helmet>
                <title>Online NAPLAN Test Preparation AU | Tutors with TutorExel</title>
                <meta
                    name="description"
                    content="Improve NAPLAN results with expert online NAPLAN tutors. We at Tutorexel provide test-prep, online tutoring, and preparation tests for Years 3-9 across Australia."
                />
            </Helmet>            
            <ExamTitle 
                title="NAPLAN Tutoring for Years 3, 5, 7 & 9" 
                customClass = "desktopview"
            />
            <ExamTitle 
                title="NAPLAN Tutoring for – (Years 3, 5, 7 & 9)" 
                customClass = "mobileview"
            />
            <FeatureSection
                imagePosition="right"
                image={naplan}
                headingText="What is NAPLAN?"
                descriptionText="The National Assessment Program – Literacy and Numeracy (NAPLAN) is a nationwide assessment sat by students in Years 3, 5, 7 and 9. It tests essential skills in English and Maths that children learn through school, covering:"
                showButton={false}
                features={tutoringFeatures}
            />

            {/* Preparation matter section */}
            <div className="nap-matter">
                <TrustSection
                    headingText="Why Preparation Matters"
                    description="NAPLAN doesn’t introduce new content, but the test format can be unfamiliar and sometimes stressful for students. With focused preparation, your child will:"
                    cardsData={whyPrepMatter}
                />
            </div>

            {/* Approach Section */}
            <div className="nap-approach">
                <HowItWorksSection
                    headingText="Our Approach"
                    stepsData={approach}
                    showButton={false}
                />
            </div>

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
    );
}

export default NaplanPage;