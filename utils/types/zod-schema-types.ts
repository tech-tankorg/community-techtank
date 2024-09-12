import { z } from "zod";

export const Author_Schema = z.object({
  name: z.string(),
  author_title: z.string(),
  author_image: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
    format: z.string(),
    resource_type: z.string(),
  }),
});

export const Newsletter_Schema = z.object({
  title: z.string(),
  scheduled_date: z.string(),
  slug: z.string(),
  featured_content: z.boolean(),
  description: z.string(),
  authors: z.array(Author_Schema),
  content: z.string().optional(),
});

export const Newsletters_Schema = z.array(Newsletter_Schema);
