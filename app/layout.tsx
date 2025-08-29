import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { inter, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "ComMarília",
  description: "Conteúdos e histórias de Marília e região",
  openGraph: { title: "ComMarília", description: "Histórias e lugares de Marília e região", type: "website", url: "https://commarilia.com/" }
};
export const viewport: Viewport = { themeColor: "#0E3AAF" };

const noFlash = `
(function(){
  try{
    var ls = localStorage.getItem('cm-theme');
    var hour = new Date().getHours();
    var autoDark = (hour >= 18 || hour < 6);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = ls ? ls === 'dark' : (autoDark || prefersDark);
    document.documentElement.classList.toggle('dark', dark);
  }catch(e){}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <div className="mx-auto w-full max-w-6xl">{children}</div>
        <Script id="sw-register" strategy="afterInteractive">{`
          if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(()=>{});
          }
        `}</Script>
      </body>
    </html>
  );
}
