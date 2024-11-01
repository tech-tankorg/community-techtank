import { z } from "zod";
import {
  Newsletters_Schema,
  Blogs_Schema,
} from "@utils/types/zod-schema-types";
import { getHeaders } from "@lib/parsers";

export type Newsletters = z.infer<typeof Newsletters_Schema>;
export type Blogs = z.infer<typeof Blogs_Schema>;
export type Newsletter = z.infer<typeof Newsletters_Schema>[number];
export type Blog = z.infer<typeof Blogs_Schema>[number];
export type Author = Newsletter["authors"][number];
export type Headers = ReturnType<typeof getHeaders>;
