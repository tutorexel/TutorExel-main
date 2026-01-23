"use client";

import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { questionData } from "@/data/questionData";
import PageHero from "@/components/ui/PageHero";

const completion = "/images/well-done.svg";

type PageProps = {
  params: {
    yearId: string;
    subjectId: string;
    termId: string;
    topicId: string;
  };
};

type Question = {
  question: string;
  options: string[];
  answer: string;
  explain?: string;
};

type TopicData = {
  name: string;
  questions: Question[];
};

type UserAnswers = Record<number, string>;

// Convert questionData to "any" temporarily to allow dynamic indexing
const getTopicData = (
  yearKey: string,
  subjectId: string,
  termId: string,
  topicId: string,
): TopicData | undefined => {
  const data: any = questionData; // <-- cast to any here
  return data?.[yearKey]?.[subjectId]?.[termId]?.[topicId];
};

const ExamPage = ({ params }: PageProps) => {
  const { yearId, subjectId, termId, topicId } = params;
  const yearKey = yearId.replace("-", "");

  const topicData = getTopicData(yearKey, subjectId, termId, topicId);

  if (!topicData || topicData.questions.length === 0) {
    return (
      <main>
        <PageHero title="Exam Not Found" />
        <Container className="py-5 text-center">
          <p className="lead">
            Sorry, we couldn't find content for this Exam yet.
          </p>
        </Container>
      </main>
    );
  }

  const questions = topicData.questions;
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showPopup, setShowPopup] = useState(true);

  const handleSelect = (qIndex: number, option: string) => {
    setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
    setShowPopup(true);
  };

  const allAnswered = Object.keys(userAnswers).length === questions.length;

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

            {allAnswered && showPopup && (
              <>
                <div className="page-dim"></div>
                <div className="completion-popup">
                  <button
                    className="close-btn"
                    onClick={() => setShowPopup(false)}
                  >
                    ×
                  </button>

                  <div className="completion-content">
                    <img src={completion} alt="Well Done" />
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
};

export default ExamPage;
