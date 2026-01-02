import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col} from "react-bootstrap";

const TermBox = ({ year, subject, termNumber, title, topics, bgColor }) => {
    return (
        <>
        <h2 className="term-title" style={{ color: bgColor }}>TERM {termNumber} – {title}</h2>
        <div className="term-box" style={{ backgroundColor: bgColor }}>
            
            <div className="term-content-wrapper">
                <Row className="term-header gx-0">
                    <Col lg={1} xs={2} className="th">S.No</Col>
                    <Col lg={4} xs={3} className="th">Topic</Col>
                    <Col lg={7} xs={7} className="th">What We Cover</Col>
                </Row>

                {topics.map((item, index) => (
                    <Row key={index} className="term-row gx-0">
                        <Col xs={1} className="td index">{index + 1}</Col>
                        <Col xs={4} className="td name">{item.name}</Col>
                        {/* <Link to={`/subjects/${year}/${subject}/term${termNumber}/topic${index + 1}`}></Link> */}
                        <Col xs={7} className="td description">{item.description}</Col>
                    </Row>
                ))}
            </div>
        </div>
        </>
    );
};

export default TermBox;
