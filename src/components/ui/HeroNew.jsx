import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import cloud1 from '../../assets/images/cloud1.svg';
import cloud2 from '../../assets/images/cloud2.svg';
import cloud3 from '../../assets/images/cloud3.svg';
import cloud4 from '../../assets/images/cloud4.svg';
import heroImg from '../../assets/images/herobg.svg';

const cards = [
    {
      title: (<> Live Online Coaching</>),
      subtitle: "Mathematics, English",
      color: "#00AF79",
      btn1text: "Book a Demo Class",
      btn1link: "#",
      btn2text: "Free Assessment Test",
      btn2link: "https://learn.tutorexel.com/d2q1kr392kq4gu3vn2ig/join/JjJCwO6.r9GqgrpkB8KYV6BP6RXVj4rYXvovQrWOf53qVGCwyC15HxAKs8yNNt3BXQHRugQowSh_xG6kTWlSqcDVKwBUZwMF",
      lmlink: "#curriculum-section"
    },
    // {
    //   title: "Self Learning",
    //   subtitle: "Mathematics, English",
    //   border: "#0094D8",
    //   btn1: "#0094D8",
    //   btn2: "#0094D8",
    //   btn1text: "Try for Free",
    //   btn2text: "Sign Up"
    // },
    {
      title: "Co-Curricular",
      subtitle: "Piano, Guitar, Yoga",
      color: "#FFA300",
      btn1text: "Book a Demo Class",
      btn1link: "#",
      // btn2text: "Sign Up",
      lmlink: "/play-music"
    },
    {
      title: (<>NAPLAN Bootcamp</>),
      subtitle: "Year 3, Year 5, Year 7, Year 9",
      color: "#0A2740",
      // btn1text: "Book a Demo Class",
      // btn2text: "Sign Up",
      lmlink: "#naplan-box"
    }
  ];

const clouds = [cloud1, cloud3, cloud4];

const HeroNew = () => {
  return (
    <section>
      <div className="heronew-section" style={{backgroundImage: `url(${heroImg})`}}>
        <Container className="py-5">
          <div className="cloudnew-section">
            {cards.map((card, index) => (
            <div className="cloudnew-part">
              <div className="cloudnew-img">
                <img key={index} src={clouds[index]} alt="" />
                <div className="cloud-text text-center">
                  <h2 style={{color: card.color}}>{card.title}</h2>
                  <p>{card.subtitle}</p>
                  <a href={card.lmlink} class="hotspot hotspot1 cloud-link">Learn More</a>
                </div>
                
              </div>
              <div className="cloud-buttons">
                {card.btn1text &&(
                  <Link to={card.btn1link}>
                    <Button style={{ background: card.color, border: "none" }}>
                      {card.btn1text}
                    </Button>
                  </Link>
                )}
                {card.btn2text && (
                  <Link to={card.btn2link}>
                    <Button style={{ background: card.color, border: "none" }}>
                      {card.btn2text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            ))}
          </div>
          <div className="pricebtn">
              <div className="text-center mt-5">
                <Link to={"/pricing"}>
                  <Button variant="secondary-blue" size="lg" className="main-btn-b d-inline-flex align-items-center">
                        Select Our Offerings
                  </Button>
                  
                </Link>
              </div>
          </div>
        </Container>
      </div>
    </section>

    // <section>
    //   <div className="heronew-section" style={{backgroundImage: `url(${heroImg})`}}>
    //     <Container className="py-5">
    //       <div className="cloudnew-section">
    //         {cards.map((card, index) => (
    //         <div className="cloudnew-part">
    //           <div className="cloudnew-img">
    //             <img key={index} src={clouds[index]} alt="" />
    //             <a href="https://example.com" class="hotspot hotspot1 cloud-link">Learn More</a>
    //           </div>
    //           <div className="cloud-buttons">
    //             <Button style={{ background: card.btn1, border: "none" }}>
    //               {card.btn1text}
    //             </Button>
    //             <Button style={{ background: card.btn2, border: "none" }}>
    //               {card.btn2text}
    //             </Button>
    //           </div>
    //         </div>
    //         ))}
    //       </div>
    //     </Container>
    //   </div>
    // </section>

    // <section className="hero-section-bg py-5 responsive-hero m new-hero-section">
    //   <Container className="cloud-row-container">
    //     <div className="cloud-row">
    //       {cards.map((card, index) => (
    //         <div
    //           className="cloud-card"
    //           key={index}
    //           style={{ borderColor: card.border }}
    //         >
    //           <div className="cloud-card-bg">
    //             <h2 style={{ color: card.border }}>{card.title}</h2>
    //             <p>{card.subtitle}</p>
    //             <a href="#" className="cloud-link">Learn More</a>
    //           </div>

    //           <div className="cloud-buttons">
    //             <Button style={{ background: card.btn1, border: "none" }}>
    //               {card.btn1text}
    //             </Button>
    //             <Button style={{ background: card.btn2, border: "none" }}>
    //               {card.btn2text}
    //             </Button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </Container>
    // </section>
  )
};

export default HeroNew;