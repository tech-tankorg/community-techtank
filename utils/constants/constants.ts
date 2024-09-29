import type { Metadata } from "next";
export const IS_PROD = process.env.NODE_ENV === "production" ? true : false;
export const BASE_URL = IS_PROD
  ? "https://community.techtankto.com"
  : "http://localhost:3000";

const title_template = "TechTank Community Portal";
const description_template =
  "Welcome to the TechTank community portal, where you will find important information around ";

export const generateMetadataObject = (
  title = title_template,
  description = description_template
): Metadata => {
  const metadata: Metadata = {
    title,
    description,
    keywords: ["TechTank", "Toronto", "JavaScript", "Tech community", "Tech"],
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: "TechTank Community Portal",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };

  return metadata;
};
