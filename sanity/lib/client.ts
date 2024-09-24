import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

import { IS_PROD } from "@utils/constants";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: IS_PROD,
});
