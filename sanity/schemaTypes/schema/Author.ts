import type { SchemaTypeDefinition, Rule } from "sanity";

export const Author: SchemaTypeDefinition = {
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of Author",
      description: "What is the name of the author?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "author_title",
      title: "Author title",
      description: "What is the tile of the author?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: "cloudinary.asset",
      name: "author_image",
      description: "Profile pic of the author",
    },
  ],
};
