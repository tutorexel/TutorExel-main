"use client";

import {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const cloud1 = '/images/cloud1.svg';
const cloud2 = '/images/cloud2.svg';
const cloud3 = '/images/cloud3.svg';
const cloud4 = '/images/cloud4.svg';
const heroImg = '/images/herobg.svg';

const cards = [
    {
      title: (<> Live Online Coaching</>),
      subtitle: (<>Mathematics, English<br/>Year 2 to 10</>),
      color: "#00AF79",
      btn1text: "Book a Demo Class",
      btn1link: "#",
      lmlink: "/pricing"
    },
    // {
    //   title: "Self Learning",
    //   subtitle: "Mathematics, English",
    //   color: "#0094D8",
    //   btn1text: "Try for Free",
    //   btn1link: "#",
    //   btn2text: "Sign Up",
    //   btn2link: "#",
    //   lmlink: "#"
    // },
    {
      title: "Co-Curricular",
      subtitle: "Piano, Guitar",
      color: "#FFA300",
      btn1text: "Book a Demo Class",
      btn1link: "#",
      // btn2text: "Sign Up",
      lmlink: "/pricing"
    },
    {
      title: (<>NAPLAN Bootcamp<div className="sun-wrapper">
  <div className="sun-rays"></div>

  <div className="sun-core">
    <span className="sun-text">
      Batch Starting<br />
      <strong>26th Jan</strong><br />
      Limited Seats
    </span>
  </div>
</div></>),
      subtitle: "Year 3, 5, 7, 9",
      color: "#0A2740",
      // btn1text: "Book a Demo Class",
      // btn2text: "Sign Up",
      lmlink: "/pricing"
    }
  ];

const clouds = [cloud1, cloud3, cloud4];

  

const HeroNew = ({openPopup}) => {

  return (
    <>
    <section>
      <div className="heronew-section" style={{backgroundImage: `url(${heroImg})`}}>
        <Container className="py-3">
          <div className="cloudnew-section">
            {cards.map((card, index) => (
            <div className="cloudnew-part" key={index}>
              <div className="cloudnew-img">
                <img key={index} src={clouds[index]} alt="" />
                <div className="cloud-text text-center">
                  <h2 style={{color: card.color}}>{card.title}</h2>
                  <p>{card.subtitle}</p>
                  <a href={card.lmlink} className="hotspot hotspot1 cloud-link">Learn More</a>
                </div>
                
              </div>
              {/* <div className="cloud-buttons">
                {card.btn1text &&(
                  <Link to={card.btn1link} onClick={handleButtonClick}>
                    <Button style={{ background: card.color, border: "none" }} onClick={openPopup}>
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
              </div> */}
            </div>
            ))}
            {/* <div className="sun-wrapper">
  <div className="sun-rays"></div>

  <div className="sun-core">
    <span className="sun-text">
      Batch Starting<br />
      <strong>12th Jan</strong><br />
      Limited Seats
    </span>
  </div>
</div> */}



          </div>
          <div className="pricebtn">
              <div className="text-center mt-3">
                <Link href="/pricing" passHref>
                  <Button variant="secondary-blue" size="lg" className="main-btn-b d-inline-flex align-items-center">
                        Join Now
                  </Button>
                  
                </Link>
              </div>
          </div>
        </Container>
      </div>
    </section>

     
</>
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