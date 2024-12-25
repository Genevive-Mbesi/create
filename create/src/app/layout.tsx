import type { Metadata } from "next";
import "./globals.css";
import Providers from '@/components/providers'
import Navbar from "./Navbar/page";
import Footer from './Footer/page'


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
        <Navbar/>
        <Providers>
           {children}
        </Providers>
       <Footer/>
      </body>
    </html>
  );
}
