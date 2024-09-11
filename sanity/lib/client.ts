import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const getAllNewsletters = async () => {
  const getAllNewslettersQuery = `*[_type == "newsletter"]{
        "authorNames": authors[]->name,
        content,
        title
        }
        `;

  const newsletters: {
    authorNames: string[];
    content: string;
    title: string;
  }[] = await client.fetch(getAllNewslettersQuery);

  return newsletters;
};
