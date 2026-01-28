import type { Metadata } from "next";
import PianoClient from "./PianoClient";

export const metadata: Metadata = {
  title: "Online Piano Lessons from Initial to Grade 8 | TutorExel",
  description:
    "Learn piano online with structured lessons following a graded approach from Initial Grade to Grade 8, supporting learners at different skill levels.",
};

export default function MusicPage() {
  return <PianoClient />;
}
