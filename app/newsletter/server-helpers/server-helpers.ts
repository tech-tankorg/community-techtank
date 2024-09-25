import { Newsletter_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";
import { getHeaders } from "@lib/parsers";
import { notFound } from "next/navigation";
import { IS_PROD } from "@utils/constants";

export const getNewsletter = async (slug: string) => {
  try {
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
            description,
            newsletter_image{url, width, height, format, resource_type}
        }
        `;

    const newsletterPrep = await client.fetch(
      query,
      {},
      {
        next: { revalidate: IS_PROD ? 86400 : 0 },
      }
    );

    const newsletter = Newsletter_Schema.parse(newsletterPrep);

    return { newsletter, headers: getHeaders(newsletter.content ?? "") };
  } catch {
    notFound();
  }
};
