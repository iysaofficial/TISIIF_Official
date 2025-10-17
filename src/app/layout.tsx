import FooterComp from '@/components/FooterComp';
import NewsletterComp from '@/components/home/NewsletterComp';
import NavbarComp from '@/components/NavbarComp';
import { ReactNode } from 'react';

export const metadata = {
  title: "TISIIF Official"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Analytics */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WMYTZ0FQ2Q"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WMYTZ0FQ2Q');
            `,
          }}
        /> */}
      </head>
      <body>
        <NavbarComp/>
        {children}
        <br />
        <br />
        <br />
        <NewsletterComp/>
        <FooterComp />
      </body>
    </html>
  );
}