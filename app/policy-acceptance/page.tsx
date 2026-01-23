import { Suspense } from "react";
import PolicyAcceptanceClient from "@/app/policy-acceptance/PolicyAcceptanceClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PolicyAcceptanceClient />
    </Suspense>
  );
}
