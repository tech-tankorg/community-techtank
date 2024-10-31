import React from "react";
import {
  getAllArticles,
  getFeaturedArticles,
} from "./server-helpers/server-helpers";
import ContentHomePage from "@components/ContentHomePage/ContentHomePage";

const BlogHome = async () => {
  const featuredArticles = await getFeaturedArticles();
  const blogs = await getAllArticles();

  return <ContentHomePage featured={featuredArticles} content={blogs} />;
};

export default BlogHome;
