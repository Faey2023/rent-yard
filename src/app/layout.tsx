import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/shared/Nav";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent Yard",
  description: "A simple real estate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.variable}  antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
