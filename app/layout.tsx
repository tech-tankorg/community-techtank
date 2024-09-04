import "../styles/layout.css";
import type { Metadata } from "next";
import { rubik } from "../utils/constants/fonts";

import NavigationBar from "../components/NavigationBar/NavigationBar";

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
      </body>
    </html>
  );
}
