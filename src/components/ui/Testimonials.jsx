// src/components/Testimonials.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatarPriya from '../../assets/images/avatar-priya.png';
import avatarRohit from '../../assets/images/avatar-rohit.png';
import stars5 from '../../assets/icons/stars-5.svg';
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
      <style jsx>{`
        .testimonials-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 107, 0, 0.03) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 500;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 4rem;
          font-weight: 400;
        }

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

        .testimonial-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 107, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, rgba(255, 107, 0, 0.3), transparent, rgba(255, 107, 0, 0.1));
          border-radius: 26px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        .quote-icon {
          color: var(--primary-orange, #ff6b00);
          margin-bottom: 1.5rem;
          opacity: 0.7;
        }

        .testimonial-text {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-weight: 400;
          font-style: italic;
          position: relative;
        }

        .stars-rating {
          width: 140px;
          margin: 0 auto 2rem auto;
          filter: drop-shadow(0 2px 4px rgba(255, 107, 0, 0.2));
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .reviewer-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 4px solid transparent;
          background: linear-gradient(135deg, var(--primary-orange, #ff6b00), #ff8533);
          padding: 3px;
          position: relative;
          overflow: hidden;
        }

        .reviewer-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
        }

        .reviewer-details h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
        }

        .reviewer-role {
          font-size: 0.9rem;
          color: var(--primary-orange, #ff6b00);
          font-weight: 600;
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

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .testimonial-container {
            padding: 0 20px;
          }
          
          .testimonial-card {
            padding: 2rem;
          }
          
          .testimonial-text {
            font-size: 1.1rem;
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
            <h2 className="section-title">What parents and students are saying</h2>
            <p className="section-subtitle">Real feedback from our learning community</p>
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial-slider">
              <div className="testimonial-track">
                {testimonialsData.map((testimonial, index) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-card">
                      <FaQuoteLeft size={30} className="quote-icon" />
                      
                      <img 
                        src={stars5} 
                        alt="5-star rating" 
                        className="stars-rating"
                      />
                      
                      <p className="testimonial-text">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="reviewer-details">
                          <h4>{testimonial.name}</h4>
                          <p className="reviewer-role">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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