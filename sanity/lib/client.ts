import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

import { Newsletters_Schema } from "@utils/types/zod-schema-types";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
