import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { questionDataNap } from "../../data/naplanExam";
import completion from '../../assets/images/well-done.svg'
import PageHero from "../../components/ui/PageHero";

const ExamPageNaplan = () => {
    const { yearId, subjectId, topicId } = useParams();
    // Fix year format (year-2 → year2)
    const yearKey = yearId.replace("-", "");

    const topicData = questionDataNap[yearKey][subjectId][topicId];

    const questions = topicData.questions;

    const [userAnswers, setUserAnswers] = useState({});
    const [showPopup, setShowPopup] = useState(true);

    const handleSelect = (qIndex, option) => {
        setUserAnswers({
        ...userAnswers,
        [qIndex]: option,
        });
        setShowPopup(true);
    };

    // Check if all questions are answered
    const allAnswered = Object.keys(userAnswers).length === questions.length;

    // const questionContent = questionDataNap[yearId]?.[subjectId.toLowerCase()];
    if (questions.length === 0) {
        return (
        <main>
            <PageHero title="Exam Not Found" />
            <Container className="py-5 text-center">
            <p className="lead">Sorry, we couldn't find content for this Exam yet.</p>
            </Container>
        </main>
        );
    }

    // If all answered → show welcome screen
    return (
      <div className="exam-page">
      <Container>
        <Row className="px-5 py-5">
    <div className="mock-container">
      <h2 className="p-5">Practice Test</h2>
      <div className="question-div py-2 px-5">
      {questions.map((q, index) => {
        const userChoice = userAnswers[index];

        return (
          
          <div key={index} className="question-block">
            <h4 className="question-title">
              Q{index + 1}. {q.question}
            </h4>

            <div className="options-list">
              {q.options.map((opt, optIndex) => {
                const isSelected = opt === userChoice;
                const isCorrectAnswer = opt === q.answer;

                return (
                  <div
                    key={optIndex}
                    className={`option-item 
                      ${isCorrectAnswer && userChoice ? "option-correct" : ""}
                      ${isSelected && !isCorrectAnswer ? "option-wrong" : ""}
                    `}
                    onClick={() => handleSelect(index, opt)}
                  >
                    <div className="circle"></div>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>

            {userChoice && (
              <div className="explanation">
                <strong>Explanation: </strong>
                {q.explain || "No explanation available."}
              </div>
            )}
          </div>
          
        );
      })}
</div>
      {/* Show popup only if all questions answered AND showPopup state is true */}
      {allAnswered && showPopup && (
        <>
          <div className="page-dim"></div>

          <div className="completion-popup">
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)} // HIDE popup on close
            >
              ×
            </button>

            <div className="completion-content">
                <img src={completion} alt="" />
              {/* <div className="success-icon-circle">
                <div className="success-inner-circle">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div> */}

              <h2 className="completion-title">Well Done.</h2>

              <div className="completion-buttons d-none">
                <button className="btn-white">
                  Book Your Free Trial Class →
                </button>

                <button className="btn-yellow">Learn More →</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </Row>
    </Container>
    </div>
  );
      

}

export default ExamPageNaplan;