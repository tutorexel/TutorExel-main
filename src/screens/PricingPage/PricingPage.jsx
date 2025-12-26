
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import PageHero from '../../components/ui/PageHero';
import PricingCard from '../../components/ui/PricingCard';
import PriceCoaching from '../../components/ui/PriceCoaching';
import PriceLearning from '../../components/ui/PriceLearning';
import PriceCurricular from '../../components/ui/PriceCurricular';
import PriceNaplan from '../../components/ui/PriceNaplan';
import icon1 from '../../assets/icons/icon-price-list1.png';
import icon2 from '../../assets/icons/icon-price-list2.png';
import icon3 from '../../assets/icons/icon-price-list3.png';
import icon4 from '../../assets/icons/icon-price-list4.png';
import './PricingPage.css';


const firstCard = [
    {title: '1:1 or 3:1 classes'},
    {title: 'Transparent learning structure'},
    {title:'Comprehensive course content'},
    {title:'Weekly practice worksheets'},
    {title:'Free assessment & report'},
    {title:'Regular term tests'},
    {title:'Biannual mega exams'},
    {title:'Flexible scheduling & make-ups'},
    {title:'All-in-one learning platform'},
];

const secondCard = [
    {title: 'Curriculum transparency & skills'},
    {title: 'Term-wise structured catalogue'},
    {title:'Comprehensive course content'},
    {title:'Weekly practice worksheets'},
    {title:'Term & mega exams'},  
];

const thirdCard = [
    {title: '1:1 or 3:1 classes'},
    {title: 'Transparent learning structure'},
    {title:'Comprehensive course content'},
    {title:'Weekly practice worksheets'},
    {title:'Free assessment & report'},
    {title:'Regular term tests'},
    {title:'Biannual mega exams'},
    {title:'Flexible scheduling & make-ups'},
    {title:'All-in-one learning platform'},
];

const fourthCard = [
    {title: '10 NAPLAN coaching sessions'},
    {title: 'NAPLAN practice worksheets'},
    {title:'2 full mock exams'},
    {title:'Structured NAPLAN material'},
    {title:'Self-practice NAPLAN tests'},  
];

const Pricing = () => {

    const [activeLayout, setActiveLayout] = useState(null);
    const layoutRef = useRef(null);

    useEffect(() => {
    if (activeLayout && layoutRef.current) {
        layoutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}, [activeLayout]);

    return(
        <main>
            <PageHero title="Pricing" />
            <section className="pt-5 bg-white">
                <Container>
                    <Row className="">
                        <Col lg={11}>
                        <h2 className="section-heading">Our Offerings</h2>
                        <p className="page-intro mt-3 text-secondary">
                            Every family begins with a free trial class so you can experience Tutorexel with no commitment. After your trial, you can choose either One-to-One Tutoring or Group Classes. All sessions are 1 hour. Payments are billed monthly in advance. Cancel anytime with 2 weeks’ notice.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white">
                <Container className="my-5">
                    <Row className="g-4">
                        <Col xs={12} sm={6} lg={4} className="d-flex">
                            <PricingCard 
                            bgColor= '#05AC8F'
                            title = 'Live Online Coaching'
                            points = {firstCard}
                            listIcon = {icon1}
                            onSelect={() => setActiveLayout(1)}
                            />
                        </Col>
                        {/* <Col xs={12} sm={6} lg={3} className="d-flex">
                            <PricingCard 
                            bgColor= '#22A3D2'
                            title = 'Self Learning'
                            points = {secondCard}
                            listIcon = {icon2}
                            onSelect={() => setActiveLayout(2)}
                            />
                        </Col> */}
                        <Col xs={12} sm={6} lg={4} className="d-flex">
                            <PricingCard 
                            bgColor= '#FF9E10'
                            title = 'Co-Curricular'
                            points = {thirdCard}
                            listIcon = {icon3}
                            onSelect={() => setActiveLayout(3)}
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={4} className="d-flex">
                            <PricingCard 
                            bgColor= '#0F2A47'
                            title = 'NAPLAN Bootcamp'
                            points = {fourthCard}
                            listIcon = {icon4}
                            onSelect={() => setActiveLayout(4)}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

                {/* Layout below cards */}
            <section className="mt-5">
                <Container className="my-5">
                    <Row ref={layoutRef} className="g-4">
                        {/* <div ref={layoutRef} style={{ width: '100%' }}> */}
                        {activeLayout === 1 && (
                            <>
                            <Col className="d-flex" md={6}>
                                <PriceCoaching 
                                title="1:1 Coaching"
                                price1="84"
                                price2="149"
                                />
                            </Col>
                            <Col className="d-flex" md={6}>
                                <PriceCoaching 
                                title={<>Group<br/> Coaching (3:1)</>}
                                price1="39"
                                price2="69"
                                />
                            </Col>
                            </>
                        )}

                        {activeLayout === 2 && (
                            <PriceLearning />
                        )}

                        {activeLayout === 3 && (
                            <Col className="curricular-card" md={8} lg={6} sm={12}>
                                <PriceCurricular 
                                title="Co-Curricular"
                                price1="60"
                                price2="60"
                                />
                            </Col>
                        )}

                        {activeLayout === 4 && (
                            <Col className="naplan-card" md={8} lg={6} sm={12}>
                                <PriceNaplan />
                            </Col>
                        )}
                        {/* </div> */}
                    </Row>
                </Container>
            </section>
        </main>
    )
};

export default Pricing;