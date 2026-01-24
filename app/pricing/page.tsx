import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "TutorExel Pricing | Flexible Tutoring Packages for Students",
  description:
    "Discover TutorExel’s flexible tutoring prices in Australia. We provide clear packages for all subjects, supporting primary & secondary learning needs. Visit now!",
};

export default function Pricing() {
  return <PricingClient />;
}
