import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const tstarPro = localFont({
    src: [
        { path: "../assets/fonts/T-StarPro-Light.woff", weight: "300", style: "normal" },
        { path: "../assets/fonts/T-StarPro-Regular.woff", weight: "400", style: "normal" },
        { path: "../assets/fonts/T-StarPro-Bold.woff", weight: "700", style: "normal" },
    ],
    variable: "--font-tstar-pro",
    display: "swap",
});

const trebuchetMS = localFont({
    src: [
        { path: "../assets/fonts/trebuc.ttf", weight: "400", style: "normal" },
    ],
    variable: "--font-trebuchet",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Daya Dimensi Indonesia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body
              className={`${tstarPro.variable} ${trebuchetMS.variable} antialiased`}
              style={{fontFamily: "var(--font-tstar-pro), var(--font-trebuchet), sans-serif"}}
          >
            {children}
          </body>
      </html>
  );
}
