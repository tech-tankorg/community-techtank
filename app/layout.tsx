import type { Metadata } from "next";
import { rubik } from "@utils/constants/fonts";
import cx from "classnames";

import "@styles/layout.css";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import Footer from "@components/Footer/Footer";
import RenderOnSelectPath from "@components/Generic/ToggleOnClient";

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
      <body className={cx("layoutFormat", rubik.className)}>
        <RenderOnSelectPath>
          <NavigationBar />
        </RenderOnSelectPath>

        {children}
        <RenderOnSelectPath>
          <Footer />
        </RenderOnSelectPath>
      </body>
    </html>
  );
}
