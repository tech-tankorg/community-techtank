import groq from "groq";

export const generateSanityQueryString = (query: string) => {
  return groq`${query}`;
};
