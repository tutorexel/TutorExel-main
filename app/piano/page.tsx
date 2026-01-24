import type { Metadata } from "next";
import PianoClient from "./PianoClient";

export const metadata: Metadata = {
  title: "Learn Piano Online Australia | Beginner Music Lessons TutorExel",
  description:
    "We provide online music lessons in Australia for beginners. Get a piano tutor online, personal online music tutoring, & beginner piano lessons online. Start now.",
};

export default function MusicPage() {
  return <PianoClient />;
}
