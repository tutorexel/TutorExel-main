import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HomePage.css';

// --- Import all assets here ---
import tutoringGirl from '../../assets/images/tutoring-girl.png';
import progressBoy from '../../assets/images/progress-boy.png';
import iconEducators from '../../assets/icons/icon-educators.svg';
import iconLessons from '../../assets/icons/icon-lessons.svg';
import iconFlexible from '../../assets/icons/icon-flexible.svg';
import iconPricing from '../../assets/icons/icon-pricing.svg';
import iconAssess from '../../assets/icons/icon-assess.svg';
import iconPlan from '../../assets/icons/icon-plan.svg';
import iconExperience from '../../assets/icons/icon-experience.svg';
import iconLearnGrow from '../../assets/icons/icon-learn-grow.svg';
// import ctaFamily from '../../assets/images/ct-family.png';
import teacherOk from '../../assets/images/teacher-ok.png';
import iconMath from '../../assets/icons/icon-math.svg';
import iconHindi from '../../assets/icons/icon-hindi.svg';
import iconScience from '../../assets/icons/icon-science.svg';
import iconEnglish from '../../assets/icons/icon-english.svg';

// --- Import all components here ---
import Hero from '../../components/ui/Hero';
import FeatureSection from '../../components/ui/FeatureSection';
import TrustSection from '../../components/ui/TrustSection';
import HowItWorksSection from '../../components/ui/HowItWorksSection';
import LearningStyles from '../../components/ui/LearningStyles';
import ContentBanner from '../../components/ui/ContentBanner';
import SubjectCard from '../../components/ui/SubjectCard';
import Testimonials from '../../components/ui/Testimonials';
import CTASection from '../../components/ui/CTASection';

// Coming Soon Modal Component
const ComingSoonModal = ({ isOpen, onClose, title = "Coming Soon!" }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white position-relative mx-3"
        style={{ 
          maxWidth: '450px', 
          width: '100%',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 15px 30px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1)',
          animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          border: '1px solid rgba(254, 157, 16, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="position-absolute"
          style={{
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontSize: '18px',
            color: '#666'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.2)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'scale(1)';
          }}
          aria-label="Close"
        >
          ×
        </button>
        
        {/* Modal content */}
        <div className="text-center" style={{ padding: '40px 40px 50px 40px' }}>
          {/* Icon */}
          <div 
            className="d-inline-flex align-items-center justify-content-center mb-4"
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(254, 157, 16, 0.1), rgba(255, 140, 0, 0.1))',
              borderRadius: '50%',
              border: '3px solid rgba(254, 157, 16, 0.2)'
            }}
          >
            <span style={{ fontSize: '36px' }}>🚀</span>
          </div>
          
          <h2 className="fw-bold mb-3" style={{ 
            fontSize: '2.2rem',
            color: '#2c3e50',
            letterSpacing: '-0.5px'
          }}>
            {title}
          </h2>
          
          <p className="mb-4" style={{ 
            fontSize: '1.1rem',
            color: '#64748b',
            lineHeight: '1.6',
            margin: '0 auto',
            maxWidth: '300px'
          }}>
            This subject will be available shortly. We're working hard to bring you amazing content!
          </p>
          
          {/* Single centered button */}
          <div className="d-flex justify-content-center mt-4">
            <button
              onClick={onClose}
              className="btn fw-semibold"
              style={{ 
                backgroundColor: '#fe9d10',
                borderColor: '#fe9d10',
                color: 'white',
                borderRadius: '12px',
                padding: '12px 32px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(254, 157, 16, 0.3)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e88a0e';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(254, 157, 16, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fe9d10';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(254, 157, 16, 0.3)';
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const tutoringFeatures = [
    { text: 'Choose Your ', bold: 'Preferred Slot' },
    { text: 'Progress Reports Aligned With The ', bold: 'Australian Curriculum' },
    { text: 'Free Consultation ', bold: 'And Demo Class' },
    { text: 'AUD 21 / Hour  - ', bold: 'No Contracts' },
];

const progressFeatures = [
    { text: 'What Your Child Has ', bold: 'Learned' },
    { text: 'Strengths And Areas For ', bold: 'Improvement' },
    { text: 'Next Steps ', bold: 'Recommended By The Tutor' },
];

const whyTrustCards = [
    { 
        icon: iconEducators, 
        title: 'Qualified Educators', 
        description: "Our tutors are handpicked, trained, and dedicated to your child's unique learning journey." 
    },
    { 
        icon: iconLessons, 
        title: 'Curriculum-Aligned Lessons', 
        description: "All sessions follow your child's curriculum and learning goals, wherever you are in Australia.",
    },
    { 
        icon: iconFlexible, 
        title: 'Flexible & Convenient', 
        description: 'Your child can learn comfortably from home, on a schedule that fits your family.' 
    },
    { 
        icon: iconPricing, 
        title: 'Clear, Affordable Pricing', 
        description: 'Simple monthly plans with no hidden fees and your first class is free.' 
    },
];

const subjectsData = [
    {
        icon: iconMath,
        title: 'Mathematics',
        description: 'Build strong numeracy skills and master concepts aligned with the Australian curriculum.',
        link: '/subjects/mathematics',
        isComingSoon: false
    },
    {
        icon: iconEnglish,
        title: 'English',
        description: 'Improve reading, writing, and comprehension confidence in communication.',
        link: '/subjects/english',
        isComingSoon: false
    },
{
  icon: iconScience,
  title: (
    <>
      Science <br /> (Coming Soon)
    </>
  ),
  description: 'Explore biology, chemistry, and physics with engaging lessons that spark curiosity',
  link: '/subjects/science',
  isComingSoon: true
},

   {
  icon: iconHindi,
  title: (
    <>
      Hindi <br /> (Coming Soon)
    </>
  ),
  description: 'Build strong language skills and master concepts aligned with the Australian curriculum.',
  link: '/subjects/hindi',
  isComingSoon: true
},

];

const howItWorksSteps = [
    { 
        icon: iconAssess, 
        title: 'Assess', 
        description: "Assess - We take time to learn about your child's learning style, strengths, and needs before starting" 
    },
    { 
        icon: iconPlan, 
        title: 'Plan', 
        description: "We create a customised learning plan tailored to your child's needs and curriculum." 
    },
    { 
        icon: iconExperience, 
        title: 'Experience', 
        description: 'Start with a free trial class to see how engaging and effective online learning can be.' 
    },
    { 
        icon: iconLearnGrow, 
        title: 'Learn & Grow', 
        description: 'Select a plan, set your schedule, and watch your child\'s skills and confidence grow.' 
    }
];

const HomePage = () => {
  // State for modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle subject card click
  const handleSubjectClick = (subject, e) => {
    e.preventDefault(); // Prevent Link navigation
    if (subject.isComingSoon) {
      setShowModal(true);
    } else {
      // Navigate to the subject page
      window.location.href = subject.link;
    }
  };

  return (
    <main>
      {/* SEO for home-page */}
      <Helmet>
        <title>Online Tutoring Australia | TutorExel Personalised Learning</title>
        <meta
                name="description"
                content="TutorExel offers expert online tutoring across Australia. We provide personalised learning & exam prep in all subjects, aligned with the Australian Curriculum."
        />
      </Helmet>

      <Hero />
        <FeatureSection
          imagePosition="left"
          image={tutoringGirl}
          headingText="Private Online Tutoring Across Australia"
          descriptionText="One-on-one and group lessons for all grades, subjects, and test preparation."
          features={tutoringFeatures}
          buttonText="Book Your Free Trial Class"
        />

        {/* Trust Section */}
        <TrustSection
          headingText="Why Parents Trust TutorExel"
          cardsData={whyTrustCards}
        />

        {/* Subjects Section */}
        <section className="py-5 subjects-section">
        <Container>
          <div className="text-center">
            <h2 className="section-heading">Subjects We Offer</h2>
            <p className="lead text-secondary mx-auto mt-3" style={{ maxWidth: '700px' }}>
              Tutorexel helps your child excel in every area:
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="horizontal-scroll-container row gx-4 gy-4">
            {subjectsData.map((subject, index) => (
              <Col md={3} lg={3} xl={3} key={index} className="flex-shrink-0">
                {subject.isComingSoon ? (
                  // For coming soon subjects, use div with click handler
                  <div 
                    className="text-decoration-none d-block h-100" 
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handleSubjectClick(subject, e)}
                  >
                    <SubjectCard
                      icon={subject.icon}
                      title={subject.title}
                      description={subject.description}
                    />
                  </div>
                ) : (
                  // For available subjects, use Link as before
                  <Link to={subject.link} className="text-decoration-none d-block h-100">
                    <SubjectCard
                      icon={subject.icon}
                      title={subject.title}
                      description={subject.description}
                    />
                  </Link>
                )}
              </Col>
            ))}
          </div>
        </Container>
      </section>

       <HowItWorksSection
          headingText="How It Works"
          stepsData={howItWorksSteps}
          showButton={true}
          buttonText="Take your assessment test"
          buttonIcon={<FaArrowRight />}
          buttonLink="/contact"
        />

        <LearningStyles />
        <ContentBanner
          image={teacherOk}
          imagePosition="left"
          className="bg-white"
          content={
            <div>
              <p className="text-white  text-start banner-copy" style={{ fontSize: '24px', lineHeight: '1.7', margin: 0 }}>
                No matter which option you choose, your child receives high-quality instruction, caring support, and measurable progress.
              </p>
            </div>
          }
        />
        <FeatureSection
          imagePosition="right"
          image={progressBoy}
          headingText="Progress You Can See"
          features={progressFeatures}
          buttonText="Contact Us"
        />
        <Testimonials />
        <CTASection
          headingText="Ready to Help Your Child Succeed?"
          image={""}
          primaryButtonText="Book Your Free Trial Class"
          primaryButtonIcon={<FaArrowRight />}
          primaryButtonTextColor="black"
          secondaryButtonText="Contact Us to Learn More"
          secondaryButtonIcon={<FaArrowRight />}
          secondaryButtonTextColor="#FFFFFF"
        />

        {/* Coming Soon Modal */}
        <ComingSoonModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)}
          title="Coming Soon!"
        />
    </main>
  );
};

export default HomePage;
