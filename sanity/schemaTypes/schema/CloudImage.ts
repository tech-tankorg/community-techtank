import type { SchemaTypeDefinition, Rule } from "sanity";

export const CloudImage: SchemaTypeDefinition = {
  name: "cloud_image",
  title: "Cloud Image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of image",
      description: "What is the name of the image?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "alt_text",
      title: "Alt text",
      description: "What is the alt text?",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "aspect_ratio",
      title: "Aspect Ratio",
      description: "What is the Aspect ratio of the image",
      type: "string",
      options: {
        list: [
          { title: "Original", value: "original" },
          { title: "1:1", value: "1:1" },
          { title: "2:3", value: "2:3" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "cloudinary.asset",
      name: "cloudinary_image",
      description:
        "This will act as the newsletter image for SEO and header images.",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
