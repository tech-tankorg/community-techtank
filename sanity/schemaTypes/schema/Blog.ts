import type { SchemaTypeDefinition, Rule } from "sanity";
import { MARKDOWN_TEMPLATE } from "@sanity/constants/templates/content";

export const Blog: SchemaTypeDefinition = {
  name: "blog",
  title: `Blog`,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Provide a title the Blog",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Provide a description for the Blog",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "scheduled_date",
      description: "When is the Blog going to be released?",
      title: "Schedule Blog",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "This field is for the letter slug. Where is the blog being hosted?",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "featured_content",
      title: "Featured Content",
      description: "Is this newsletter going to be a featured banner?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "authors",
      title: "Authors",
      description: "Select the authors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "seo_image",
      title: "Newsletter Image",
      description:
        "This will act as the newsletter image for SEO and header images.",
      type: "reference",
      to: [{ type: "cloud_image" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: "markdown",
      description: "Newsletter content goes here",
      name: "content",
      initialValue: MARKDOWN_TEMPLATE,
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
