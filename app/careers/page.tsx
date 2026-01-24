import type { Metadata } from "next";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
  title: "Careers at TutorExel | Join Our Online Tutoring Team",
  description:
    "Explore careers with TutorExel & join our online tutoring team. We’re hiring passionate educators across Australia to deliver curriculum-aligned learning support.",
};

export default function CareersPage() {
  return <CareerClient />;
}
