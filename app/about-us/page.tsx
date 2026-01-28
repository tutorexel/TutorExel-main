import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | TutorExel Online Tutoring Across Australia",
  description:
    "Discover TutorExel’s mission and values. We provide trusted online tutoring in Australia with qualified tutors, personalised learning & curriculum-aligned support.",
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TutorExel",
  description:
    "Discover TutorExel’s mission and values. We provide trusted online tutoring in Australia with qualified tutors, personalised learning & curriculum-aligned support.",
  url: "https://tutorexel.com/about-us",
  publisher: {
    "@type": "Organization",
    name: "TutorExel",
    url: "https://www.tutorexel.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tutorexel.com/images/logo.svg",
    },
    sameAs: [
      "https://www.facebook.com/share/1Za9NLXEqM/",
      "https://www.instagram.com/tutorexellearning",
    ],
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      <AboutUsClient />
    </>
  );
}
