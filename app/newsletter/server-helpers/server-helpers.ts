import { Newsletter_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";

export const getNewsletter = async (slug: string) => {
  console.log({ slug });
  const getNewsletterQuery = `*[_type == "newsletter" && slug.current == "test-title"][0]{
            title,
            scheduled_date,
            "slug": slug.current,
            featured_content,
            authors[]->{
                name,
                author_title,
                author_image{url, width, height, format, resource_type}
            },
            content,
            description
        }
        `;

  const newsletter = await client.fetch(getNewsletterQuery);

  return Newsletter_Schema.parse(newsletter);
};
