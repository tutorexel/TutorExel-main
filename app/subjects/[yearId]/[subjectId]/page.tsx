import type { Metadata } from "next";
import { seoData } from "@/seo/seoData";
import SubjectPageClient from "./SubjectClient";

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
  const seo = seoData[key];
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

  return <SubjectPageClient yearId={yearId} subjectId={subjectId} />;
}
