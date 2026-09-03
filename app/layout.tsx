import type { Metadata } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/ui/to-top';
import TopBar from './(root)/header/TopBar';
import Nav from './(root)/header/Nav';
import Script from 'next/script';
import Image from 'next/image';
import Footer from './(root)/footer/Footer';
import PixelRouteTracker from './(root)/components/pixel-tracker';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk' });
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'GulfCart — Checkout growth platform for Shopify brands in the Gulf',
  description:
    'True local currency, one-tap returning buyers, verified COD and country-level payment rules on the Shopify store you already run.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${display.variable} ${body.variable}`}>
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

        <meta name="google-site-verification" content="I8eKilxAfbdVS9RZWiThEdy1AKj_XDXJ5EdMdRAzfCo" />

        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1374440587883809&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <PixelRouteTracker />
        
        <Nav />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}