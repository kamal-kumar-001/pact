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
  title: "PACT — Discipline Enforcement System",
  description:
    "PACT enforces the promises you make to yourself with proof, enforcement, and accountability.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-arp=""
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#05060a] font-sans text-white antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
