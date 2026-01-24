import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | TutorExel Online Tutoring Across Australia",
  description:
    "Discover TutorExel’s mission and values. We provide trusted online tutoring in Australia with qualified tutors, personalised learning & curriculum-aligned support.",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
