"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import { subjectsData } from "@/data/subjectsData";
import TermBox from "@/components/ui/TermBox";
import PageHero from "@/components/ui/PageHero";
import CTAHome from "@/components/ui/CTAHome";

// type PageProps = {
//   params: {
//     yearId: string;
//     subjectId: string;
//   };
// };

// export default function SubjectPage({
//   params,
// }: {
//   params: Promise<{ yearId: string; subjectId: string }>;
// }) {
type SubjectPageProps = {
  yearId: string;
  subjectId: string;
};
export default function SubjectPage({ yearId, subjectId }: SubjectPageProps) {
  // const { yearId, subjectId } = React.use(params);

  // Scroll to top on route change (optional in Next.js)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [yearId, subjectId]);

  const subjectsByYear = Array.from({ length: 9 }, (_, i) => ({
    year: `Year ${i + 2}`,
    yearLink: `year-${i + 2}`,
    subjects: ["Maths", "English"],
  }));

  const subjectContent =
    subjectsData[yearId as keyof typeof subjectsData]?.[
      subjectId.toLowerCase() as "maths" | "english"
    ];

  const formattedYear = yearId
    ? `Year ${yearId.replace("year-", "")}`
    : "program";

  const activeYearNumber = yearId?.split("-")[1];

  const colorCodes = ["#22A3D2", "#FF9E10", "#05AC8F", "#0F2A47"];

  type Term = {
    title: string;
    topics: { name: string; description: string }[];
  };
  const terms: Term[] = (
    Object.keys(subjectContent) as (keyof typeof subjectContent)[]
  )
    .filter((key) => key.startsWith("term"))
    .map((key) => subjectContent[key] as Term);

  // Calendly popup
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  if (!subjectContent) {
    return (
      <main>
        <PageHero title="Subject Not Found" />
        <Container className="py-5 text-center">
          <p className="lead">
            Sorry, we couldn't find content for this subject yet.
          </p>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* Year navigation */}
      <section className="py-2 top-year-section">
        <Container>
          <Row>
            <p className="mb-0">
              <i>
                {subjectsByYear.map((y, index) => {
                  const yearNumber = y.year.split(" ")[1];
                  const isActive = yearNumber === activeYearNumber;

                  return (
                    <span key={y.year}>
                      <Link href={`/subjects/year-${yearNumber}/${subjectId}`}>
                        {isActive ? <strong>{y.year}</strong> : y.year}
                      </Link>
                      {index < subjectsByYear.length - 1 && " / "}
                    </span>
                  );
                })}
                {" / "}
                <Link href={`/naplan/year-3/${subjectId}`}>Naplan</Link>
              </i>
            </p>
          </Row>
        </Container>
      </section>

      {/* Subject tabs */}
      <section className="top-subject-section">
        <Container>
          <Row>
            <p className="mb-0">
              <span className={subjectId === "maths" ? "highlight p-3" : "p-3"}>
                <Link href={`/subjects/${yearId}/maths`}>Maths</Link>
              </span>
              <span
                className={subjectId === "english" ? "highlight p-3" : "p-3"}
              >
                <Link href={`/subjects/${yearId}/english`}>English</Link>
              </span>
            </p>
          </Row>
        </Container>
      </section>

      {/* Intro */}
      <section className="pt-5 bg-white">
        <Container>
          <Row>
            <h1 className="section-heading">{formattedYear}</h1>
            <h2 className="section-heading">{subjectContent.introHeading}</h2>
            <p className="text-secondary mt-3 page-intro">
              {subjectContent.introP1}
            </p>
            <p
              className="text-secondary page-intro"
              dangerouslySetInnerHTML={{
                __html: subjectContent.introP2,
              }}
            />
          </Row>
        </Container>
      </section>

      {/* Terms */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            {terms.length > 0 ? (
              terms.map((term, index) => (
                <TermBox
                  key={index}
                  year={yearId}
                  subject={subjectId}
                  termNumber={index + 1}
                  title={term.title}
                  topics={term.topics}
                  bgColor={colorCodes[index % colorCodes.length]}
                />
              ))
            ) : (
              <p className="lead">
                Sorry, we couldn't find content for this subject yet.
              </p>
            )}
          </Row>
        </Container>
      </section>

      <CTAHome
        headingText="Ready to Help Your Child Succeed?"
        image=""
        primaryButtonText="Book Your Free Trial Class"
        primaryButtonIcon={<FaArrowRight />}
        primaryButtonTextColor="black"
        secondaryButtonText="Contact Us to Learn More"
        secondaryButtonIcon={<FaArrowRight />}
        secondaryButtonTextColor="#FFFFFF"
        openPopup={openPopup}
      />

      {/* Fixed CTA */}
      <div className="fixed-div">
        <div className="inner-fixed-div">
          <h6>View our Offerings</h6>
          <div className="inner-btn">
            <Link
              href="/pricing"
              className="d-inline-flex align-items-center btn btn-primary-orange"
            >
              View Here
            </Link>
          </div>
        </div>
      </div>

      {/* Calendly popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://calendly.com/tutorexel-info/democlass"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Book a meeting"
            />
          </div>
        </div>
      )}
    </main>
  );
}
