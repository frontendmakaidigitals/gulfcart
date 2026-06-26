import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Open_Sans,
  Inter,
  Krona_One,
} from "next/font/google";
import { FacebookPixel } from "./(root)/components/facebook-pixel";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({ variable: "--font-inter", subsets: ["latin"] });

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "GulfCart | Engine Behind GCC Commerce",
  description:
    "+39% CVR, +24% AOV, 6 GCC markets from one Shopify store. GulfCart runs the checkout, payments, and buyer network behind it. See how — book a demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMono.variable,
        jakarta.variable,
        inter.variable,
        openSans.variable,
        kronaOne.variable,
      )}
    >
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1374440587883809');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1374440587883809&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
