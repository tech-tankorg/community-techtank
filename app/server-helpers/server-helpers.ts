import { Newsletters_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";
import groq from "groq";

export const getAllNewsletters = async () => {
  const query = groq`*[_type == "newsletter"] | order(scheduled_date desc){
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
            description
        }`;

  const newsletters = await client.fetch(query);

  return Newsletters_Schema.parse(newsletters);
};

export const getFeaturedNewsletter = async () => {
  const query = groq`*[_type == "newsletter" && featured_content == true] | order(scheduled_date desc){
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
            description
        }`;

  const sanityResult = await client.fetch(query);
  const newsletter = Newsletters_Schema.parse(sanityResult);

  return newsletter[0];
};
