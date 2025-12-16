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
    avatar: avatarRohit,
    role: 'B.Tech Student'
  },
  { 
    id: 2,
    name: 'Rohit K.', 
    text: 'We love the flexibility and the personalised approach. Highly recommended', 
    avatar: avatarPriya,
    role: 'MBA Student'
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
      <style jsx>{`

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

              <div className="row g-5">
                {testimonialsData.map((testimonial, index) => (
                  <div className="col-lg-6" key={testimonial.id}>
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
              </div>

            
            {/* <button className="navigation-buttons nav-prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            
            <button className="navigation-buttons nav-next" onClick={nextSlide}>
              <FaChevronRight />
            </button> */}
          </div>
          
          {/* <div className="dots-indicator">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div> */}
        </Container>
      </section>
    </>
  );
};

export default Testimonials;