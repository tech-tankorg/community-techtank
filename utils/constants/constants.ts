export const IS_PROD = process.env.NODE_ENV === "production" ? true : false;
export const BASE_URL = IS_PROD
  ? "https://community.techtankto.com"
  : "http://localhost:3000";

export const TITLE_TEMPLATE = "TechTank Community Portal";
export const DESCRIPTION_TEMPLATE =
  "Welcome to the TechTank community portal, where you will find important information around ";

export const SEO_IMG =
  "https://res.cloudinary.com/dhu6qys0s/image/upload/v1728506219/community_seo_img_fahysm.png";
