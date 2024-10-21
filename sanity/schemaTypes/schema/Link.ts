import type { SchemaTypeDefinition, Rule } from "sanity";

export const Link: SchemaTypeDefinition = {
  name: "link",
  title: "Link",
  type: "document",
  fields: [
    {
      name: "link_name",
      title: "Link Name",
      description: "What is the name of the link?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "endpoint",
      title: "Internal Endpoint",
      description: "What is the endpoint?",
      type: "string",
    },
    {
      name: "external_url",
      title: "External Url",
      description: "What is the external URL?",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
  ],
};
