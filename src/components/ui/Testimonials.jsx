// src/components/Testimonials.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatarPriya from '../../assets/images/avatar-priya.png';
import avatarRohit from '../../assets/images/avatar-rohit.png';
import stars5 from '../../assets/icons/stars-5.svg';
import blockqote from '../../assets/icons/blockqote.png';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  { 
    id: 1,
    name: 'Priya S.', 
    text: 'Tutorexel has been a wonderful experience for my son. The teachers are professional, and he looks forward to every class!', 
    avatar: avatarPriya,
    role: 'Parent'
  },
  { 
    id: 2,
    name: 'Rohit K.', 
    text: 'We love the flexibility and the personalised approach. Highly recommended for any parent looking for quality education.', 
    avatar: avatarRohit,
    role: 'Parent'
  },
  { 
    id: 3,
    name: 'Sarah M.', 
    text: 'My daughter\'s confidence in mathematics has improved dramatically. The one-on-one attention makes all the difference.', 
    avatar: avatarPriya, // Using existing avatar
    role: 'Parent'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <>
      <style>{`
        .testimonial-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 60px;
        }
        .testimonial-slider {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
        }

        .testimonial-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-${currentIndex * 100}%);
        }

        .testimonial-slide {
          min-width: 100%;
          padding: 0 20px;
        }
        .testimonial-wrapper {
          position: relative;
          padding-bottom: 70px; /* space for profile */
        }

        .testimonial-cardd {
          background: #23a7d4;
          color: white;
          padding: 35px;
          border-radius: 22px;
          position: relative;
        }

        .stars {
          font-size: 20px;
          letter-spacing: 3px;
          color: #FFBB57;
        }

        .message {
          margin-top: 15px;
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .quotes {
          position: absolute;
          right: 20px;
          top: 0;
          font-size: 42px;
          font-weight: bold;
          /* opacity: 0.4; */
          width: 30px;
        }

        /* ▼ Speech bubble pointer */
        .speech-arrow {
          width: 0;
          height: 0;
          border-left: 18px solid transparent;
          border-right: 36px solid transparent;
          border-top: 55px solid #23a7d4;
          margin: -2px auto 0; /* center under bubble */
          transform: skewX(55deg) translateX(-125px);
        }

        /* Profile section */
        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }

        .profile-img {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px dashed #070709;
          padding: 4px;
        }

        .profile-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: #000;
        }

        .navigation-buttons {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 2px solid rgba(255, 107, 0, 0.2);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .navigation-buttons:hover {
          background: var(--primary-orange, #ff6b00);
          color: white;
          transform: translateY(-50%) scale(1.1);
          border-color: var(--primary-orange, #ff6b00);
        }

        .nav-prev {
          left: 0;
        }

        .nav-next {
          right: 0;
        }

        .dots-indicator {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 3rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e0e0e0;
          cursor: pointer;
          transition: all 0.4s ease;
          border: none;
          outline: none;
          position: relative;
        }

        .dot:hover {
          background: rgba(255, 107, 0, 0.6);
          transform: scale(1.1);
        }

        .dot.active {
          background: var(--primary-orange, #ff6b00);
          width: 24px;
          border-radius: 12px;
          transform: scale(1);
        }

        .dot:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .testimonial-cardd {
            padding: 25px;
          }

          .message {
            font-size: 1rem;
          }

          .speech-arrow {
            border-left-width: 30px;
            border-right-width: 30px;
            border-top-width: 40px;
            transform: skewX(60deg) translateX(-65px);
            margin-left: 111px;
          }

          .navigation-buttons {
            width: 40px;
            height: 40px;
          }
          
          .nav-prev {
            left: -10px;
          }
          
          .nav-next {
            right: -10px;
          }
        }

      `}</style>

      <section className="testimonials-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-heading">What parents and students are saying</h2>
            {/* <p className="section-subtitle">Real feedback from our learning community</p> */}
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial-slider">
              <div className="testimonial-track">
              {/* <div className="row g-5"> */}
                {testimonialsData.map((testimonial, index) => (
                  <div className="col-lg-12 px-3 testimonial-slide" xs={12} sm={12} key={testimonial.id}>
                    <div className="testimonial-wrapper">
                      <div className="testimonial-cardd">
                        <div className="stars"><img src={stars5} alt="Stars" className="profile-imgg" /></div>
                        <p className="message">
                          {testimonial.text}
                        </p>

                        <div className="quotes"><img src={blockqote} alt="Stars" className="profile-imgg" /></div>
                      </div>

                      <div className="speech-arrow"></div>

                      <div className="profile">
                        <img src={testimonial.avatar} alt="Person" className="profile-img" />
                        <span className="profile-name">{testimonial.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              {/* </div> */}
                </div>
                </div>
            
            <button className="navigation-buttons nav-prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            
            <button className="navigation-buttons nav-next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="dots-indicator">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;