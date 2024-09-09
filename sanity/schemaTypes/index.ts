import { type SchemaTypeDefinition } from "sanity";
import { Newsletter } from "./schema/Newsletter";
import { Author } from "./schema/Author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Newsletter, Author],
};
