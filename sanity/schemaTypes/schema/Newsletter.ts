import type { SchemaTypeDefinition, Rule } from "sanity";

export const Newsletter: SchemaTypeDefinition = {
  name: "letter",
  title: `Nemo's Newsletter`,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Provide a title the newsletter -- ie/ July 2023 Newsletter",
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
    },
    {
      name: "authors",
      title: "Authors",
      description: "Select the authors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
    },
    {
      type: "markdown",
      description: "Newsletter content goes here",
      name: "content",
    },
  ],
};
