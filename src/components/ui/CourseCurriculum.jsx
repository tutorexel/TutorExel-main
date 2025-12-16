import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const years = Array.from({ length: 9 }, (_, i) => ({
  year: `Year ${i + 2}`,
  subjects: ['English',  'Maths'],
}));

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")      // spaces → dashes
    .replace(/[^a-z0-9-]/g, ""); // remove special characters

const Curriculum = () => {

  return (
    <section className="curriculum-section">
      <Container>
        <h2 className="curriculum-title">Course Curriculum</h2>
        <p className="curriculum-subtitle">
          Click on the subject to know our 40 Sessions syllabus
        </p>

        <Row className="g-4 justify-content-center">
          {years.map((item, index) => (
            <Col key={index} md={4} className="d-flex justify-content-center">
              <div className="year-card">
                <h4>{item.year}</h4>
                <p>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum
                </p>

                <div className="btn-row">
                    {item.subjects.map((subject, index)=> (
                        <Button key = {index} className="subject-btn" href={`/subjects/${slugify(item.year)}/${slugify(subject)}`}>{subject}</Button>
                    ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* NAPLAN BOX */}
        <div className="naplan-box">
          <h4>NAPLAN</h4>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </p>

          <div className="btn-row">
            <Button className="subject-btn white-btn">English</Button>
            <Button className="subject-btn white-btn">Maths</Button>
          </div>
        </div>
      </Container>
    </section>
  )};

export default Curriculum;
