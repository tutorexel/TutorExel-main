import React, {useEffect, useState} from "react";
import { FaArrowRight} from 'react-icons/fa';
import { Container,Row, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import placeholder from '../../assets/images/placeholder.jpg'
import iconEducators from '../../assets/icons/icon-educators.svg';
import iconLessons from '../../assets/icons/icon-lessons.svg';
import iconFlexible from '../../assets/icons/icon-flexible.svg';
import iconPricing from '../../assets/icons/icon-pricing.svg';
import iconScience from '../../assets/icons/icon-science.svg';
import iconEnglish from '../../assets/icons/icon-english.svg';
import iconAssess from '../../assets/icons/icon-assess.svg';
import iconPlan from '../../assets/icons/icon-plan.svg';
import iconExperience from '../../assets/icons/icon-experience.svg';
import iconLearnGrow from '../../assets/icons/icon-learn-grow.svg';
import bookdemo from '../../assets/images/book-demo.png';

import cloud1 from '../../assets/images/cloud1.png';
import cloud2 from '../../assets/images/cloud2.png';
import cloud3 from '../../assets/images/cloud3.png';
import cloud4 from '../../assets/images/cloud4.png';
import heroImg from '../../assets/images/herobg.svg';

import Hero from "../../components/ui/Hero";
import HeroNew from "../../components/ui/HeroNew";
import Curriculum from "../../components/ui/CourseCurriculum";
import FeatureSection from "../../components/ui/FeatureSection";
import TrustSection from "../../components/ui/TrustSection";
import CoursesOffer from "../../components/ui/CoursesOffer";
import HowItWorksSection from "../../components/ui/HowItWorks";
import CareerOutcome from "../../components/ui/CareerOutcome";
import Testimonials from "../../components/ui/Testimonials";
import CTAHome from "../../components/ui/CTAHome";

import './HomePage.css';

const heroButton = [
    {link:'/contact', label:'Explore Courses'},
    {link:'/contact', label:'Talk to a Career Advisor'}
];

const howItWorksSteps = [
    { 
        icon: iconAssess, 
        title: 'Assess', 
        description: "Upload your child’s recent assessment scores—or take a free assessment with us to understand their current level." 
    },
    { 
        icon: iconPlan, 
        title: 'Plan', 
        description: "We create a customised learning plan tailored to your child’s needs and curriculum." 
    },
    { 
        icon: iconExperience, 
        title: 'Experience', 
        description: 'Start with a free trial class to see how engaging and effective online learning can be.' 
    },
    { 
        icon: iconLearnGrow, 
        title: 'Learn & Grow', 
        description: 'Select a plan, set your schedule, and watch your child’s skills and confidence grow.' 
    }
];

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // For calendly Popup
    
    const [showPopup, setShowPopup] = useState(false);
      
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const [show, setShow] = useState(true); // visible by default
    
    return(
        <main>

            <HeroNew openPopup={openPopup} />

            <Curriculum />

            <HowItWorksSection
            headingText="How It Works"
            stepsData={howItWorksSteps}
            showButton={true}
            buttonText="Take your assessment test"
            buttonIcon={<FaArrowRight />}
            buttonLink="https://learn.tutorexel.com/d2q1kr392kq4gu3vn2ig/join/JjJCwO6.r9GqgrpkB8KYV6BP6RXVj4rYXvovQrWOf53qVGCwyC15HxAKs8yNNt3BXQHRugQowSh_xG6kTWlSqcDVKwBUZwMF"
            />

            <Testimonials />

            <CTAHome
            headingText="Ready to Help Your Child Succeed?"
            image={""}
            primaryButtonText="Book Your Free Trial Class"
            primaryButtonIcon={<FaArrowRight />}
            primaryButtonTextColor="black"
            secondaryButtonText="Contact Us to Learn More"
            secondaryButtonIcon={<FaArrowRight />}
            secondaryButtonTextColor="#FFFFFF"
            openPopup={openPopup}
            />

            {/* <div className="offer-img">
                <div className="offer-data tooltip-wrapper">
                    
                    
                    {show && (
                        <div className="custom-tooltip">
                            <span>Book Your Free Trial Class</span>
                            <button
                                className="tooltip-close"
                                onClick={() => setShow(false)}
                            >
                                ×
                            </button>
                        </div>
                    )}

                    <Button onClick={openPopup}>
                        <img
                            src={bookdemo}
                            alt="Book Demo"
                            className="demo-icon"
                        />
                    </Button>

                </div>
            </div> */}

            <div className="fixed-div">
                <div className="inner-fixed-div">
                    <h6>Hurry up. Book your demo class</h6>
                    <div className="inner-btn">
                        <Button onClick={openPopup}
                        className="d-inline-flex align-items-center btn btn-primary-orange"
                        
                        >
                            Book Here
                        </Button>
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
};

export default Home;