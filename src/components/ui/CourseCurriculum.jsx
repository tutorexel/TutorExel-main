import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const descriptions = [
  "Build strong foundations in Maths and English through fun, interactive learning. Focus on numbers, basic operations, reading skills, grammar, and comprehension.",
  "Strengthen core concepts with deeper practice in Maths and English. Covers multiplication, division, fractions, reading comprehension, and sentence skills.",
  "Develop confidence in problem-solving and language usage. Learn advanced arithmetic, fractions, geometry, grammar, and vocabulary building.",
  "Bridge primary to middle school with structured concept clarity. Focus on decimals, fractions, data handling, advanced grammar, and writing skills.",
  "Build strong fundamentals for middle school mathematics and English. Covers ratios, basic algebra, geometry, comprehension, and language structure.",
  "Enhance logical thinking and communication skills. Includes rational numbers, algebra basics, geometry, grammar, and writing fluency.",
  "Prepare for higher-level concepts with in-depth learning. Covers linear equations, exponents, geometry, advanced grammar, and comprehension.",
  "Strengthen academic rigour for board-level preparation. Focus on algebra, geometry, statistics, analytical reading, and writing skills.",
  "Master key concepts essential for board exams and future studies. Includes advanced algebra, geometry, trigonometry, statistics, and English proficiency."
];

const years = Array.from({ length: 9 }, (_, i) => ({
  year: `Year ${i + 2}`,
  subjects: ['English',  'Maths'],
  description: descriptions[i]
}));

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, "-")      // spaces → dashes
    .replace(/[^a-z0-9-]/g, ""); // remove special characters

const Curriculum = () => {

  return (
    <section id="curriculum-section" className="curriculum-section">
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
                  {item.description}
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
        <div id="naplan-box" className="naplan-box">
          <h4>NAPLAN</h4>
          <p>
            Targeted NAPLAN-focused learning to strengthen numeracy and literacy skills. Covers problem-solving, reading comprehension, grammar, spelling, writing, and exam-style questions aligned to ACARA standards.
          </p>

          <div className="btn-row">
            <Link to="/naplan/year-3/english"><Button className="subject-btn white-btn">English</Button></Link>
            <Link to="/naplan/year-3/maths"><Button className="subject-btn white-btn">Maths</Button></Link>
          </div>
        </div>
      </Container>
    </section>
  )};

export default Curriculum;
