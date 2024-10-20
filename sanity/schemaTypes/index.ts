import { type SchemaTypeDefinition } from "sanity";

import * as Schemas from "./schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: Object.values(Schemas),
};
