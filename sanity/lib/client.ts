import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

import { Newsletter_Schema } from "@utils/types/zod-schema-types";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const getAllNewsletters = async () => {
  const getAllNewslettersQuery = `*[_type == "newsletter"]{
            title,
            scheduled_date,
            "slug": slug.current,
            featured_content,
            authors[]->{
                name,
                author_title,
                author_image{url, width, height, format, resource_type}
            },
            content
        }
        `;

  const newsletters = await client.fetch(getAllNewslettersQuery);

  return Newsletter_Schema.parse(newsletters);
};
