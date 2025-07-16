/* frontend/src/app/layout.tsx */
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'em-tech.ai | AI & Data Solutions',
  description: 'Showcasing AI tools, smart analytics, and innovative tech projects by Elias.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* This meta tag alone suppresses Chrome’s auto-translate bar */}
        <meta name="google" content="notranslate" />

        {/* GTM HEAD Script */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-PSKH48XZ'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSKH48XZ');
        `}
      </Script>
      </head>

  <body className="font-sans antialiased">
    {/* GTM NoScript Fallback */}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-PSKH48XZ"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>

    {/* Chatbase script */}
    <Script id="chatbase-bubble" strategy="afterInteractive">
      {`
        window.chatbaseConfig = {
          chatbotId: "2KDhX_QMcGLg7-KbhH2qq",
        };

        (function() {
          var script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.async = true;
          document.body.appendChild(script);
        })();
      `}
    </Script>

    {/* Your page content */}
    {children}
  </body>
    </html>
  );
}