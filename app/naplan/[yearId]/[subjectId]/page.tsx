import type { Metadata } from "next";
import { seoNaplan } from "@/seo/seoNaplan";
import NaplanPageClient from "./NaplanClient";

type PageProps = {
  params: Promise<{
    yearId: string;
    subjectId: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { yearId, subjectId } = await params;

  const key = `${yearId}-${subjectId}`;
  const seo = seoNaplan[key];
  console.log("SEO KEY: " + key);
  return seo
    ? {
        title: seo.title,
        description: seo.description,
      }
    : {
        title: "Online Tutoring | Expert Tutors",
        description:
          "Personalised online tutoring aligned with the Australian Curriculum.",
      };
}

export default async function Page({ params }: PageProps) {
  const { yearId, subjectId } = await params;

  return <NaplanPageClient yearId={yearId} subjectId={subjectId} />;
}
