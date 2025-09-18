import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Music.css';

import music from '../../assets/images/Music.png';
import musiclearn from '../../assets/images/music_learn.png';
import card1 from '../../assets/images/music_card1.png';
import card2 from '../../assets/images/music_card2.png';
import card3 from '../../assets/images/music_card3.png';
import card4 from '../../assets/images/music_card4.png';
import card5 from '../../assets/images/music_card5.png';
import card6 from '../../assets/images/music_card6.png';
import card7 from '../../assets/images/music_card7.png';
import card8 from '../../assets/images/music_card8.png';
import iconscheduel from '../../assets/icons/icon_schedule.png';
import iconfeature from '../../assets/icons/icon_featured.png';
import iconcomplete from '../../assets/icons/icon_completed.png';
import iconlib from '../../assets/icons/icon_library.png';
import maprch1 from '../../assets/images/nap_aprch1.png';
import maprch2 from '../../assets/images/nap_aprch2.png';
import maprch3 from '../../assets/images/music_check.png';
import maprch4 from '../../assets/images/music_price.png';

// Import reusable components
import ExamTitle from '../../components/ui/ExamTitle';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import FeatureItem from '../../components/ui/FeatureItem';
import ListItems from '../../components/ui/ListItems';
import HowItWorksSection from '../../components/ui/HowItWorksSection';
import ChooseLevel from '../../components/ui/ChooseLevel';
import CTASection from '../../components/ui/CTASection';

const tutoringFeatures = [
    { text: <>We follow the <b>Trinity College London syllabus,</b> trusted worldwide for graded music education.</>, bold: '' },
    { text: <>Lessons are available from <b>absolute beginner level (Initial Grade)</b> through to <b>Grade 8.</b></>, bold: '' },
    { text: <>Students develop <b>technical skills, music theory, and performance confidence</b> — all from the comfort of home.</>, bold: '' }
];

const learnFeatures = [
    { text: <><b>Technique:</b> Hand position, scales, arpeggios, exercises.</>},
    { text: <><b>Repertoire:</b> Performance pieces set by the Trinity syllabus.</>, bold: '' },
    { text: <><b>Theory & Musicianship:</b> Reading sheet music, rhythm, dynamics.</>, bold: '' },
    { text: <><b>Creativity:</b> Improvisation and simple composition for interested learners.</>, bold: '' },
    { text: <><b>Performance Skills:</b> Building confidence to play in front of others or at exam recitals.</>, bold: '' }
];

const whyPrepMatter = [
    { 
        icon: card1, 
        title: 'Qualified Tutors',
        description: 'Experienced musicians with a passion for teaching.'
    },
    { 
        icon: card2, 
        title: 'Structured Progression',
        description: 'Clear milestones through Trinity grades.'
    },
    { 
        icon: card3, 
        title: 'Flexible Scheduling',
        description: 'One-to-one online classes that fit your timetable.'
    },
    { 
        icon: card4, 
        title: 'Globally Recognised',
        description: 'Option to sit official Trinity music exams for international certificates.'
    },
];

const whyParent = [
    { 
        icon: card5, 
        title: 'Safe and supportive online learning environment'
    },
    { 
        icon: card6, 
        title: 'Clear practice goals that keep children motivated'
    },
    { 
        icon: card7, 
        title: 'Recognition through the Trinity exam system'
    },
    { 
        icon: card8, 
        title: 'The joy of watching children grow musically and personally'
    },
];

const points = [
    <><b>Children (6+)</b> starting music for the first time.</>,
    <>Students already learning piano who want to move into the <b>Trinity pathway.</b></>,
    <><b>Adults</b> looking to learn piano as a hobby or work towards graded exams.</>
];

const approach = [
    { 
        icon: maprch1, 
        title: <>Start at <b>Initial Grade</b></>, 
        description: <><i>(suitable for beginners)</i></> 
    },
    { 
        icon: maprch2, 
        title: <>Progress through <b>Grades 1–8</b> at your own pace</>, 
        description: "" 
    },
    { 
        icon: maprch3, 
        title: <>Optional <b>Trinity Piano Exams</b> online</>,  
        description: '' 
    },
    { 
        icon: maprch4, 
        title: 'Earn internationally recognised certificates', 
        description: '' 
    }
];

const featureData = [
    {
        icon: iconscheduel,
        title: <><b>Weekly one-to-one online lessons</b> (60 minutes)</>
    },
    {
        icon: iconlib,
        title: <>Guided home practice assignments <b>after each class</b></>
    },
    {
        icon: iconcomplete,
        title: <>Optional mock performance sessions to prepare for <b>Trinity exams</b></>
    },
    {
        icon: iconfeature,
        title: <>Regular <b>progress feedback</b> to parents and students</>
    },
];

const MusicPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <main>
            <ExamTitle 
                title="Learn Piano Online with Tutorexel" 
                description={
                                <>Step-by-step piano lessons following the internationally recognised <strong>Trinity College London Piano syllabus.</strong></>
                            }
                showButton = {true}
                buttonText = "Book Your Free Trial Class"
            />
            <FeatureSection
                imagePosition="left"
                image={music}
                headingText="About Our Piano Classes"
                descriptionText="At Tutorexel, we make learning piano enjoyable, structured, and rewarding."
                showButton={false}
                features={tutoringFeatures}
            />

            {/* Preparation matter section */}
            <div className="music-choose">
                <TrustSection
                    headingText="Why Choose Tutorexel Piano Lessons?"
                    cardsData={whyPrepMatter}
                />
            </div>

            <FeatureSection
                imagePosition="right"
                image={musiclearn}
                headingText="What You’ll Learn"
                descriptionText={<>Our lessons are designed to balance <b>fun with rigour,</b> ensuring steady progress.</>}
                showButton={false}
                features={learnFeatures}
            />
            
            <FeatureItem 
                title = 'Class Format'
                itemData = {featureData}
            />

            <section className="py-2 bg-white">
                <Container>
                    <Row className="justify-content-center list-bg">
                        <Col lg={12}>
                            <ListItems 
                                title = "Who Can Join?"
                                pointsData = {points}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Approach Section */}
            <div className="nap-approach music-approach mb-5">
                <HowItWorksSection
                    headingText="Pathway with Trinity College London"
                    stepsData={approach}
                    showButton={false}
                />
            </div>

            <div className="nap-matter mb-5">
                <TrustSection
                    headingText = "Why Parents Love Tutorexel Piano"
                    cardsData = {whyParent}
                    length = {3}
                />
            </div>

            {/* CTA */}
            <div className="nap-cta music_cta mb-5">
                <CTASection
                    headingText="Ready to Begin Your Musical Journey?"
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

export default MusicPage;