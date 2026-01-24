import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Online Tutoring Australia | TutorExel Personalised Learning",
    template: "",
  },
  description:
    "TutorExel offers expert online tutoring across Australia. We provide personalised learning & exam prep in all subjects, aligned with the Australian Curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icons/TE.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-29V3DPRHE3"
        ></script>
        <script
          // TS needs dangerouslySetInnerHTML for raw JS
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-29V3DPRHE3');
            `,
          }}
        />
      </head>
      <body className={nunitoSans.className}>
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
