import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "TutorExel Pricing | Flexible Tutoring Packages for Students",
  description:
    "Discover TutorExel’s flexible tutoring prices in Australia. We provide clear packages for all subjects, supporting primary & secondary learning needs. Visit now!",
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TutorExel",
  description:
    "Learn piano online with structured lessons following a graded approach from Initial Grade to Grade 8, supporting learners at different skill levels.",
  url: "https://www.tutorexel.com/pricing",
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

export default function Pricing() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />

      <PricingClient />
    </>
  );
}
