import type { Metadata } from "next";
import "./globals.css";
import Providers from '@/components/providers'
import Navbar from "./Navbar/page";
import Footer from './Footer/page'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
