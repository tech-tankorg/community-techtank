import type { SchemaTypeDefinition, Rule } from "sanity";

export const CategoryType: SchemaTypeDefinition = {
  name: "category_type",
  title: "Category Type",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of Category",
      description: "What is the name of the category?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
