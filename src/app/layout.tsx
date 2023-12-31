import Footer from "@/component/Footer";
import "./globals.css";
import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import Header from "@/component/Header";

const sans = Open_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
