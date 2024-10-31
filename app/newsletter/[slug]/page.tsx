import React from "react";
import { generateMetadataObject } from "@utils/constants";
import { getNewsletter } from "../server-helpers/server-helpers";

import { format } from "date-fns";
import ContentPage from "@components/ContentPage/ContentPage";

interface Params {
  params: { slug: string };
}
export const generateMetadata = async ({ params }: Params) => {
  const { newsletter } = await getNewsletter(params.slug);

  const metaData = generateMetadataObject(
    newsletter.title,
    newsletter.description,
    newsletter.seo_image.url
  );

  return metaData;
};

const NewsletterPage = async ({ params }: Params) => {
  const { newsletter, headers } = await getNewsletter(params.slug);

  const formattedScheduledDate = format(
    new Date(newsletter.scheduled_date.replace("-", "/")),
    "MMM do, yyyy"
  );

  return (
    <ContentPage
      content={newsletter}
      headers={headers}
      date={formattedScheduledDate}
    />
  );
};

export default NewsletterPage;
