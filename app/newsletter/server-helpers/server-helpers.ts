import { Newsletter_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";

export const getNewsletter = async (slug: string) => {
  const query = `*[_type == "newsletter" && slug.current == "${slug}"][0]{
            title,
            scheduled_date,
            "slug": slug.current,
            featured_content,
            "category":category->name,
            authors[]->{
                name,
                author_title,
                author_image{url, width, height, format, resource_type}
            },
            content,
            description
        }
        `;

  const newsletter = await client.fetch(query);

  return Newsletter_Schema.parse(newsletter);
};
