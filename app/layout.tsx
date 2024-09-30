import React from "react";
import { rubik, generateMetadataObject } from "@utils/constants";
import cx from "clsx";

import "@styles/layout.css";
import "@styles/genericStyles.css";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import Footer from "@components/Footer/Footer";
import RenderOnSelectPath from "@components/Generic/ToggleOnClient";

export const generateMetadata = async () => {
  const metaData = generateMetadataObject();

  return metaData;
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
