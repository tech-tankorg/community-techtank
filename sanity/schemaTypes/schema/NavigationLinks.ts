import type { SchemaTypeDefinition, Rule } from "sanity";

export const NavigationLink: SchemaTypeDefinition = {
  name: "navigation_link",
  title: "Navigation Link",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of navigation links",
      description: "What is the name of the navigation links?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "links",
      title: "Navigation Links",
      description: "Enter the links needed for this navigation item",
      type: "array",
      of: [{ type: "reference", to: [{ type: "link" }] }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
