import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact TutorExel | Get Tutoring Help Across Australia",
  description:
    "Need support? Contact TutorExel’s expert team today. We will answer questions on tutoring, pricing, or curriculum support across Australia. Reach us out today!",
};

export default function StudentForm() {
  return <ContactClient />;
}
