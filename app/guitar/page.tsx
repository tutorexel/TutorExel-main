import type { Metadata } from "next";
import GuitarClient from "./GuitarClient";

export const metadata: Metadata = {
  title: "Structured Online Guitar Lessons Across Skill Levels | TutorExel",
  description:
    "Learn guitar online with step-by-step lessons designed for learners at different stages, focusing on technique, rhythm, and confident playing.",
};

const guitarSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TutorExel",
  description:
    "Learn guitar online with step-by-step lessons designed for learners at different stages, focusing on technique, rhythm, and confident playing.",
  url: "https://www.tutorexel.com/guitar",
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

export default function GuitarPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guitarSchema),
        }}
      />

      <GuitarClient />
    </>
  );
}
