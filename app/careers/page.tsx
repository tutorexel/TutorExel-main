import type { Metadata } from "next";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
  title: "Careers at TutorExel | Join Our Online Tutoring Team",
  description:
    "Explore careers with TutorExel & join our online tutoring team. We’re hiring passionate educators across Australia to deliver curriculum-aligned learning support.",
};

const careerSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TutorExel",
  description:
    "Explore careers with TutorExel & join our online tutoring team. We’re hiring passionate educators across Australia to deliver curriculum-aligned learning support.",
  url: "https://www.tutorexel.com/careers",
  publisher: {
    "@type": "Organization",
    name: "TutorExel",
    url: "https://www.tutorexel.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tutorexel.com/images/logo.svg",
    },
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careerSchema),
        }}
      />

      <CareerClient />
    </>
  );
}
