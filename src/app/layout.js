import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "pact — Commit to the real thing",
  description:
    "Pact is a commitment platform for habits with real stakes, AI accountability, and squads.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-arp=""
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#05060a] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
