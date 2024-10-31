import React from "react";
import {
  getAllNewsletters,
  getFeaturedNewsletter,
} from "./server-helpers/server-helpers";
import ContentHomePage from "@components/ContentHomePage/ContentHomePage";

const Home = async () => {
  const featuredNewsletter = await getFeaturedNewsletter();
  const newsletters = await getAllNewsletters();

  return (
    <ContentHomePage featured={featuredNewsletter} content={newsletters} />
  );
};

export default Home;
