import type { Metadata } from "next";
import PianoClient from "./PianoClient";

export const metadata: Metadata = {
  title: "Online Piano Lessons from Initial to Grade 8 | TutorExel",
  description:
    "Learn piano online with structured lessons following a graded approach from Initial Grade to Grade 8, supporting learners at different skill levels.",
};

const pianoSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TutorExel",
  description:
    "Learn piano online with structured lessons following a graded approach from Initial Grade to Grade 8, supporting learners at different skill levels.",
  url: "https://www.tutorexel.com/piano",
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

export default function MusicPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pianoSchema),
        }}
      />

      <PianoClient />
    </>
  );
}
