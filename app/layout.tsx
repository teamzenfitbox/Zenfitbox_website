import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Bebas_Neue, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/Components/Footer/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],

});

export const titleFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable:"--font-heading"
  
});
export const metadata: Metadata = {
  title: "ZEN FIT BOX",
   description:
    "Join ZEN FIT BOX for personalized fitness coaching, fat loss, muscle building, strength training, and sustainable lifestyle transformation. Start your journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.className, titleFont.variable, "font-sans", geist.variable)}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
