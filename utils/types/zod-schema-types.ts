import { z } from "zod";

const Image_Schema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
  name: z.string(),
  alt_text: z.string(),
  aspect_ratio: z.string(),
});

export const Author_Schema = z.object({
  name: z.string(),
  author_title: z.string(),
  author_image: Image_Schema,
});

export const Newsletter_Schema = z.object({
  title: z.string(),
  scheduled_date: z.string({ message: "The schedule_date field is required" }),
  slug: z.string({ message: "The slug field is required" }),
  featured_content: z.boolean({
    message: "The featured_content field is required",
  }),
  description: z.string({ message: "The description field is required" }),
  authors: z.array(Author_Schema),
  content: z.string().optional(),
  category: z.string({ message: "The category field is required" }),
  news_image: Image_Schema,
});

export const Newsletters_Schema = z.array(Newsletter_Schema);
