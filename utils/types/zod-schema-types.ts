import { z } from "zod";

export const Newsletter_Schema = z.array(
  z.object({
    title: z.string(),
    scheduled_date: z.string(),
    slug: z.string(),
    featured_content: z.boolean(),
    authors: z.array(
      z.object({
        name: z.string(),
        author_title: z.string(),
        author_image: z.object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
          format: z.string(),
          resource_type: z.string(),
        }),
      })
    ),
    content: z.string(),
  })
);
