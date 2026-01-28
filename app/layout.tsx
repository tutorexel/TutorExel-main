import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

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

        {/* Load GA library */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-29V3DPRHE3"
          strategy="afterInteractive"
        />
        {/* Initialize GA */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-29V3DPRHE3');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1413365626835068');
            fbq('track', 'PageView');
        `}
        </Script>
      </head>
      <body className={nunitoSans.className}>
        {/* Meta Pixel NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1413365626835068&ev=PageView&noscript=1"
          />
        </noscript>
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
