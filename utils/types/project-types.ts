import { z } from "zod";
import {
  Newsletters_Schema,
  Blogs_Schema,
} from "@utils/types/zod-schema-types";

export type Newsletter = z.infer<typeof Newsletters_Schema>[number];
export type Blog = z.infer<typeof Blogs_Schema>[number];
export type Author = Newsletter["authors"][number];
