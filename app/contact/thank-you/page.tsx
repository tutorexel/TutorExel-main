import { Suspense } from "react";
import ThankYouClient from "@/app/contact/thank-you/ThankYouClient";
// ./ThankYouClient
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouClient />
    </Suspense>
  );
}
