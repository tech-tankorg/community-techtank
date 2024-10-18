import type { Metadata } from "next";
import {
  BASE_URL,
  TITLE_TEMPLATE,
  DESCRIPTION_TEMPLATE,
  SEO_IMG,
} from "./constants";

export const generateMetadataObject = (
  title = TITLE_TEMPLATE,
  description = DESCRIPTION_TEMPLATE,
  imgUrl = SEO_IMG
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
      images: imgUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imgUrl,
    },
  };

  return metadata;
};
