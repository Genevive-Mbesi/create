import type { Metadata } from "next";
import "./globals.css";
import Providers from '@/components/providers'
import Navbar from "./Navbar/page";
import Footer from './Footer/page'
import Slide from "@/components/Slide";

export const metadata: Metadata = {
  title: "Creative Portfolio",
  description: "Genevive Mbesi Creative Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
      >
        <Slide>
        <Navbar/>
        </Slide>
        <Providers>
           {children}
        </Providers>
        <Slide>
       <Footer/>
       </Slide>
      </body>
    </html>
  );
}
