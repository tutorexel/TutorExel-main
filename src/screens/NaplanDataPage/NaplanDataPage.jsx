import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight} from 'react-icons/fa';

import { naplanData } from "../../data/naplanData";
import TermBox from "../../components/ui/TermBox";
import PageHero from "../../components/ui/PageHero";
import CTAHome from "../../components/ui/CTAHome";
import offering from '../../assets/images/offerings.png';
import './NaplanDataPage.css';

const NaplanDataPage = () => {
    const { yearId, subjectId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [yearId, subjectId]);


    const years = [3, 5, 7, 9];
    const subjectsByYear = years.map(y => ({
            year: `Year ${y}`,
            yearLink: `year-${y}`,
            subjects: ['Maths', 'English'],
        }));

    const subjectContent = naplanData[yearId]?.[subjectId.toLowerCase()];
    const key = `${yearId}-${subjectId.toLowerCase()}`;
    const formattedYear = yearId
    ? `Year ${yearId.replace('year-', '')}`
    : 'program';

    const activeYearNumber = yearId?.split("-")[1];

    const colorCodes = ["#22A3D2", "#FF9E10", "#05AC8F", "#0F2A47"];

    const terms = Object.keys(subjectContent || {})
                .filter(key => key.startsWith("term"))
                .map(key => subjectContent[key]);

    // For calendly Popup
        
        const [showPopup, setShowPopup] = useState(false);
          
        const openPopup = () => setShowPopup(true);
        const closePopup = () => setShowPopup(false);

    const [show, setShow] = useState(true); // visible by default

    if (!subjectContent) {
        return (
        <main>
            <PageHero title="Subject Not Found" />
            <Container className="py-5 text-center">
            <p className="lead">Sorry, we couldn't find content for this subject yet.</p>
            </Container>
        </main>
        );
    }

    return(
        <main>
            <section className="py-2 top-year-section">
                <Container>
                    <Row>
                        <p className="mb-0"><i>
                            {subjectsByYear.map((y, index) => {
                            const yearNumber = y.year.split(" ")[1];
                            const isActive = yearNumber === activeYearNumber;

                            return (
                                <span key={y.year}><Link to={`/naplan/year-${yearNumber}/${subjectId}`}>
                                {isActive ? <strong>{y.year}</strong> : y.year}
                                {index < subjectsByYear.length - 1 && " / "}
                                </Link></span>
                            );
                            })}
                        </i></p>
                    </Row>
                </Container>
            </section>
            <section className="top-subject-section">
                <Container>
                    <Row>
                        <p className="mb-0">
                            <span className={subjectId === "maths" ? "highlight p-3" : "p-3"}><Link to={`/naplan/${yearId}/maths`}>Maths</Link></span>
                            <span className={subjectId === "english" ? "highlight p-3" : "p-3"}><Link to={`/naplan/${yearId}/english`}>English</Link></span>
                        </p>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 bg-white">
                <Container>
                    <Row className="">
                        <h1 className="section-heading">{formattedYear}</h1>
                        <h2 className="section-heading">{subjectContent.introHeading}</h2>
                        <p className="text-secondary mt-3 page-intro">{subjectContent.introP1}</p>
                        <p 
                            className="text-secondary page-intro" 
                            dangerouslySetInnerHTML={{ __html: subjectContent.introP2 }} 
                        />
                        {/* <h3><i><b>To Practice click on Topic Name</b></i></h3> */}
                    </Row>
                </Container>
            </section>
            <section className="py-5 bg-white">
                <Container>
                    <Row>
                        {terms.length > 0 ? (
                            <>
                                {/* {terms.map((termm, index) => (
                                    <> */}
                                        <div className="term-box" style={{ backgroundColor: colorCodes[0] }}>
                                            
                                            <div className="term-content-wrapper">
                                                <Row className="term-header gx-0">
                                                    <Col lg={1} xs={2} className="th">S.No</Col>
                                                    <Col lg={4} xs={3} className="th">Topic</Col>
                                                    <Col lg={7} xs={7} className="th">What We Cover</Col>
                                                </Row>
                                
                                                {subjectContent.term.topics.map((item, index) => (
                                                    <Row key={index} className="term-row gx-0">
                                                        <Col xs={1} className="td index">{index + 1}</Col>
                                                        <Col xs={4} className="td name">{item.name}</Col>
                                                        <Col xs={7} className="td description">{item.description}</Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        </div>
                                        {/* </>
                                ))} */}
                            </>
                            ) : (
                            <p className="lead">Sorry, we couldn't find content for this subject yet.</p>
                            )}

                    </Row>
                </Container>
            </section>

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

            {/* Offerings ICON with Tooltip */}
            <div className="fixed-div">
                            <div className="inner-fixed-div">
                                <h6>View our Pricing & Offerings</h6>
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
    )

}

export default NaplanDataPage;
