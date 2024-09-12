import { Newsletters_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";

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
            description
        }
        `;

  const newsletters = await client.fetch(getAllNewslettersQuery);

  return Newsletters_Schema.parse(newsletters);
};
