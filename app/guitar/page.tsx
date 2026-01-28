import type { Metadata } from "next";
import GuitarClient from "./GuitarClient";

export const metadata: Metadata = {
  title: "Structured Online Guitar Lessons Across Skill Levels | TutorExel",
  description:
    "Learn guitar online with step-by-step lessons designed for learners at different stages, focusing on technique, rhythm, and confident playing.",
};

export default function GuitarPage() {
  return <GuitarClient />;
}
