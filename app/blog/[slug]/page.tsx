import React from "react";
import { generateMetadataObject } from "@utils/constants";
import { getArticle } from "../server-helpers/server-helpers";

import { format } from "date-fns";
import ContentPage from "@components/ContentPage/ContentPage";

interface Params {
  params: { slug: string };
}
export const generateMetadata = async ({ params }: Params) => {
  const { blog } = await getArticle(params.slug);

  const metaData = generateMetadataObject(
    blog.title,
    blog.description,
    blog.seo_image.url
  );

  return metaData;
};

const BlogPage = async ({ params }: Params) => {
  const { blog, headers } = await getArticle(params.slug);

  const formattedScheduledDate = format(
    new Date(blog.scheduled_date.replace("-", "/")),
    "MMM do, yyyy"
  );

  return (
    <ContentPage
      content={blog}
      headers={headers}
      date={formattedScheduledDate}
    />
  );
};

export default BlogPage;
