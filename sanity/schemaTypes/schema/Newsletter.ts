import type { SchemaTypeDefinition, Rule } from "sanity";
import { MARKDOWN_TEMPLATE } from "@sanity/constants/templates/content";

export const Newsletter: SchemaTypeDefinition = {
  name: "newsletter",
  title: `Newsletter`,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Provide a title the newsletter -- ie/ July 2023 Newsletter",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Provide a description for the newsletter",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "scheduled_date",
      description: "When is the Newsletter doing to be released?",
      title: "Schedule Newsletter",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "This field is for the letter slug. Where is the letter being hosted?",
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
      name: "category",
      title: "Category",
      description: "Select the category",
      type: "reference",
      to: [{ type: "category_type" }],
      validation: (Rule: Rule) => Rule.required(),
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
      name: "news_image",
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
