import React, {useEffect} from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Container,Row, Button } from "react-bootstrap";

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

const stripContent = [
    {text: 'ChatGPT'},
    {text: 'WIPO AI'},
    {text: 'Power BI'},
    {text: 'GA4'},
    {text: 'HRIS Automation'},
    {text: 'Excel Copilot'}
];

const whyChoose = [
    { text: 'Focused on your first job', bold: '' },
    { text: 'Placement-driven training', bold: '' },
    { text: 'Courses redesigned for the AI-driven workplace', bold: '' },
    { text: 'Interview preparation and resume support', bold: '' },
];

const whyTrustCards = [
    { 
        icon: iconEducators, 
        title: 'AI-Aligned Curriculum', 
        description: "Reflects how automation and AI are changing roles." 
    },
    { 
        icon: iconLessons, 
        title: 'Learn by Doing', 
        description: "Hands-on projects and real tools, not theory.",
    },
    { 
        icon: iconFlexible, 
        title: 'Mentor Guidance', 
        description: 'Professionals guide you through real assignments.' 
    },
    { 
        icon: iconPricing, 
        title: 'Placement Support', 
        description: 'Resume polishing, mock interviews, and recruiter connects.' 
    },
];

const coursesData = [
    {
        icon: iconScience,
        title: 'Patent & IP Analyst Program',
        description: 'Learn how AI is transforming innovation research.',
        link: '/',
        isComingSoon: false
    },
    {
        icon: iconEnglish,
        title: 'HR Operations & Automation',
        description: 'Build your HR career with digital workflows and AI-based processes.',
        link: '/',
        isComingSoon: false
    },
    {
        icon: iconScience,
        title: 'Digital Marketing with AI',
        description: 'Run, track, and optimize campaigns using intelligent marketing tools.',
        link: '/',
        isComingSoon: false
    },
    {
        icon: iconEnglish,
        title: 'Interview Preparation & Soft Skills',
        description: 'Get ready for your interviews — build confidence, clarity, and presence.',
        link: '/',
        isComingSoon: false
    }
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

const outcomePoint = [
    {heading:'Land your first offer', text:'Patent Analyst, HR Associate, Data Analyst, or Digital Marketer.', icon:iconEducators},
    {heading:'Think with AI', text:'Combine domain skills with AI tools.', icon:iconLessons},
    {heading:'Communicate with Impact', text:'Present ideas and interview confidently.', icon:iconFlexible},
    {heading:'Accelerate Faster', text:'Stand out in your first six months on the job.', icon:iconPricing},
    {heading:'Be Industry-Ready', text:'Graduate with a portfolio, not just a certificate.', icon:iconEducators},
];

const whoCanApply = [
    { text: 'Final-year college students ', bold: '(any stream)' },
    { text: 'Recent graduates ', bold: '(0 – 2 years experience)' },
    { text: 'Strong learning attitude ', bold: '· Comfortable with digital tools' }
];

const faqContent = [
    {
        title: 'Is this for beginners?',
        content: 'Yes.'
    },
    {
        title: 'Are classes live?',
        content: 'Live sessions + recordings + labs.'
    },
    {
        title: 'Do you guarantee placement?',
        content: 'Placement support, not guarantees.'
    },
    {
        title: 'How much time per week?',
        content: '8 – 12 hours.'
    },
    {
        title: 'Are AI tools taught from scratch?',
        content: 'Yes.'
    },
];

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <main>

            <HeroNew />

            <Curriculum />

            <HowItWorksSection
            headingText="How It Works"
            stepsData={howItWorksSteps}
            showButton={true}
            buttonText="Take your assessment test"
            buttonIcon={<FaArrowRight />}
            buttonLink="/contact"
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
            />

            
        </main>
    );
};

export default Home;