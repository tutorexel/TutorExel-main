"use client";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// 1. Import the new assets and styles
import PageHero from "@/components/ui/PageHero";
const iconSuccessCheck = "/icons/icon-success-check.svg";

const ThankYouPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const isTeacherForm = location.state?.from === "teacher";
  const from = searchParams.get("from");
  const price = searchParams.get("price");

  const isTeacherForm = from === "teacher";

  // After Click on Payment Button
  const handleProceed = () => {
    router.push(
      `/policy-acceptance?paymentUrl=${encodeURIComponent(
        "https://www.tutorexel.com/",
      )}`,
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const message = isTeacherForm
    ? "Thank you! Our team has received your application and will connect with you via WhatsApp and email within 3-5 business days if you are shortlisted."
    : "Thank you! Your details have been received. Someone from our team will contact you shortly to complete the payment and activate the programme.";
  return (
    <main>
      <PageHero title="Enroll Now" />
      <section className="py-5">
        <Container>
          <div className="thank-you-container">
            <Image
              src="/icons/icon-success-check.svg"
              alt="Success"
              className="ml-auto mr-auto mb-3"
              width={100}
              height={100}
            />
            <h2 className="title mb-5" style={{ color: "#FFF" }}>
              Enrolment Submitted
            </h2>
            <p className="thank-you-message mb-3">{message}</p>

            {/* <Button
              className="btn btn-primary-orange"
              style={{ marginTop: "3px" }}
              onClick={handleProceed}
            >
              Proceed to Payment
            </Button> */}

            {/* <Link href="/" target="_blank">
              <Button
                className="btn btn-primary-orange"
                style={{ marginLeft: "10px", marginTop: "3px" }}
              >
                Go to Home
              </Button>
            </Link> */}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ThankYouPage;
