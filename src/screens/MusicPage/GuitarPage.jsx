import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Music.css';

import logo from '../../assets/images/logo.svg';
import musicHero from '../../assets/images/music_hero.png';
import guitar from '../../assets/images/guitar.jpg';
import guitarlearn from '../../assets/images/learn-guitar.jpg';
// import musiclearn from '../../assets/images/music_learn.png';
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
import offering from '../../assets/images/offerings.png';

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
    { text: <><b>Technique:</b> Finger placement, chord shapes, scales, strumming techniques.</>},
    { text: <><b>Repertoire:</b> Performance pieces set by the Trinity guitar syllabus.</>, bold: '' },
    { text: <><b>Theory & Musicianship:</b> Reading notation and tabs, rhythm, dynamics.</>, bold: '' },
    { text: <><b>Creativity:</b> Improvisation, chord progressions, and simple songwriting.</>, bold: '' },
    { text: <><b>Performance Skills:</b> Building confidence to perform songs and exam pieces.</>, bold: '' }
];

const whyPrepMatter = [
    { 
        icon: card1, 
        title: 'Qualified Tutors',
        description: 'Experienced guitarists with a passion for teaching.'
    },
    { 
        icon: card2, 
        title: 'Structured Progression',
        description: 'Clear milestones through Trinity guitar grades.'
    },
    { 
        icon: card3, 
        title: 'Flexible Scheduling',
        description: 'One-to-one online classes that fit your timetable.'
    },
    { 
        icon: card4, 
        title: 'Globally Recognised',
        description: 'Option to sit official Trinity guitar exams for international certificates.'
    },
];

const whyParent = [
    { 
        icon: card5, 
        title: <>Safe and<br /> supportive online<br /> learning<br /> environment</>
    },
    { 
        icon: card6, 
        title: <>Clear practice<br /> goals that keep<br /> children motivated</>
    },
    { 
        icon: card7, 
        title: <>Recognition<br /> through the Trinity<br /> exam system</>
    },
    { 
        icon: card8, 
        title: <>The joy of watching<br /> children grow<br /> musically and<br /> personally</>
    },
];

const points = [
    <><b>Children (6+)</b> starting guitar for the first time.</>,
    <>Students already learning guitar who want to move into the <b>Trinity pathway.</b></>,
    <><b>Adults</b> looking to learn guitar as a hobby or work towards graded exams.</>
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
        title: <>Optional <b>Trinity Guitar Exams</b> online</>,  
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
        title: <><b>Weekly one-to-one<br /> online lessons</b> (60<br /> minutes)</>
    },
    {
        icon: iconlib,
        title: <>Guided home<br /> practice assignments <b>after<br /> each class</b></>
    },
    {
        icon: iconcomplete,
        title: <>Optional mock<br /> performance<br /> sessions to prepare<br /> for <b>Trinity exams</b></>
    },
    {
        icon: iconfeature,
        title: <>Regular <b>progress<br /> feedback</b> to parents<br /> and students</>
    },
];

const GuitarPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

   
    // For calendly Popup
          
          const [showPopup, setShowPopup] = useState(false);
            
          const openPopup = () => setShowPopup(true);
          const closePopup = () => setShowPopup(false);
      
          const [show, setShow] = useState(true); // visible by default
    
    return(
        <main className='music-page'>
            {/* SEO for Music Page */}
            <Helmet>
                <title>Learn Guitar Online Australia | Beginner Music Lessons TutorExel</title>
                <meta
                    name="description"
                    content="We provide online music lessons in Australia for beginners. Get a guitar tutor online, personal online music tutoring, & beginner piano lessons online. Start now."
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Learn Guitar Online Australia | Beginner Music Lessons TutorExel" />
                <meta property="og:description" content="We provide online music lessons in Australia for beginners. Get a guitar tutor online, personal online music tutoring, & beginner piano lessons online. Start now." />
                <meta property="og:image" content={logo} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tutorexel.com/guitar" />

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
            <div className='hero_image_music text-center'>
                <img src={musicHero} alt="" />
            </div>
            <ExamTitle 
                title="Learn Guitar Online with Tutorexel"
                showButton = {true}
                buttonText = "Book Your Free Trial Class"
                openPopup={openPopup}
            />
            <FeatureSection
                imagePosition="left"
                image={guitar}
                headingText="About Our Guitar Classes"
                descriptionText="At Tutorexel, we make learning guitar enjoyable, structured, and rewarding."
                showButton={false}
                features={tutoringFeatures}
            />

            {/* Preparation matter section */}
            <div className="music-choose">
                <TrustSection
                    headingText="Why Choose Tutorexel Guitar Lessons?"
                    cardsData={whyPrepMatter}
                />
            </div>

            <FeatureSection
                imagePosition="right"
                image={guitarlearn}
                headingText="What You’ll Learn"
                descriptionText={<>Our lessons are designed to balance <b>fun with rigour,</b> ensuring steady progress.</>}
                showButton={false}
                features={learnFeatures}
            />
            
            <FeatureItem 
                title = 'Class Format'
                itemData = {featureData}
            />

            <section className="py-2 bg-white who_join">
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

            <div className="nap-matter">
                <TrustSection
                    headingText = "Why Parents Love Tutorexel Guitar"
                    cardsData = {whyParent}
                    length = {3}
                />
            </div>

            {/* CTA */}
            <div className="nap-cta music_cta">
                <CTASection
                    headingText="Ready to Begin Your Musical Journey?"
                    image={""}
                    primaryButtonText="Book Your Free Trial Class"
                    primaryButtonIcon={<FaArrowRight />}
                    primaryButtonTextColor="black"
                    secondaryButtonText="Contact Us to Learn More"
                    secondaryButtonIcon={<FaArrowRight />}
                    secondaryButtonTextColor="#FFFFFF"
                    openPopup={openPopup}
                />
            </div>

            {/* Offerings ICON with Tooltip */}
                        {/* <div className="offer-img">
                            <div className="offer-data tooltip-wrapper">
                                
                                
                                {show && (
                                    <div className="custom-tooltip">
                                        <span>View our Pricing & Offerings</span>
                                        <button
                                            className="tooltip-close"
                                            onClick={() => setShow(false)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
            
                                <Link to="/pricing">
                                    <img
                                        src={offering}
                                        alt="Select our Offerings"
                                        className="offer-icon"
                                    />
                                </Link>
            
                            </div>
                        </div> */}

            <div className="fixed-div">
                <div className="inner-fixed-div">
                    <h6>View our Offerings</h6>
                    <div className="inner-btn">
                        <Link to="/pricing"
                        className="d-inline-flex align-items-center btn btn-primary-orange"
                        >
                            View Here
                        </Link>
                    </div>
                </div>
            </div>

            {/* Popup Overlay */}
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                        src="https://calendly.com/tutorexel-info/democlass"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                        }}
                        title="Book a meeting"
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    );
}

export default GuitarPage;