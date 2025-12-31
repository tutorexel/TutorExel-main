import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Tooltip, OverlayTrigger, Overlay } from "react-bootstrap";

import { subjectsData } from "../../data/subjectsData";
import TermBox from "../../components/ui/TermBox";
import PageHero from "../../components/ui/PageHero";
import offering from '../../assets/images/offerings.png';
import './SubjectPage.css';

const SubjectPage = () => {
    const { yearId, subjectId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [yearId, subjectId]);


    const subjectsByYear = Array.from({ length: 9 }, (_, i) => ({
        year: `Year ${i + 2}`,
        yearLink: `year-${i + 2}`,
        subjects: ['Maths',  'English'],
    }));

    const subjectContent = subjectsData[yearId]?.[subjectId.toLowerCase()];
    const key = `${yearId}-${subjectId.toLowerCase()}`;
    const formattedYear = yearId
    ? `Year ${yearId.replace('year-', '')}`
    : 'program';

    const activeYearNumber = yearId?.split("-")[1];

    const colorCodes = ["#22A3D2", "#FF9E10", "#05AC8F", "#0F2A47"];

    const terms = Object.keys(subjectContent || {})
                .filter(key => key.startsWith("term"))
                .map(key => subjectContent[key]);

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
                                <span key={y.year}><Link to={`/subjects/year-${yearNumber}/${subjectId}`}>
                                {isActive ? <strong>{y.year}</strong> : y.year}
                                {index < subjectsByYear.length - 1 && " / "}
                                </Link></span>
                            );
                            })}
                            <span> / <Link to={`/naplan/year-3/${subjectId}`}>Naplan</Link></span>
                        </i></p>
                    </Row>
                </Container>
            </section>
            <section className="top-subject-section">
                <Container>
                    <Row>
                        <p className="mb-0">
                            <span className={subjectId === "maths" ? "highlight p-3" : "p-3"}><Link to={`/subjects/${yearId}/maths`}>Maths</Link></span>
                            <span className={subjectId === "english" ? "highlight p-3" : "p-3"}><Link to={`/subjects/${yearId}/english`}>English</Link></span>
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
                                {terms.map((term, index) => (
                                <TermBox
                                    key={index}
                                    year={yearId}
                                    subject={subjectId}
                                    termNumber={index + 1}
                                    title={term.title}
                                    topics={term.topics}
                                    bgColor={colorCodes[index % colorCodes.length]}
                                />
                                ))}
                            </>
                            ) : (
                            <p className="lead">Sorry, we couldn't find content for this subject yet.</p>
                            )}

                    </Row>
                </Container>
            </section>

            {/* Offerings ICON with Tooltip */}
            <div className="offer-img">
                <div className="offer-data tooltip-wrapper">
                    
                    {/* Tooltip */}
                    {show && (
                        <div className="custom-tooltip">
                            <span>View our Pricing & Offerings</span>
                            <button
                                className="tooltip-close"
                                onClick={() => setShow(false)}
                            >
                                ×
                            </button>
                        </div>
                    )}

                    <Link to="/pricing">
                        <img
                            src={offering}
                            alt="Select our Offerings"
                            className="offer-icon"
                        />
                    </Link>

                </div>
            </div>
        </main>
    )

}

export default SubjectPage;
