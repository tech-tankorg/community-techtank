import type { Metadata } from "next";
import { rubik } from "@utils/constants/fonts";

import "@styles/layout.css";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import Footer from "@components/Footer/Footer";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "TechTank newsletter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
