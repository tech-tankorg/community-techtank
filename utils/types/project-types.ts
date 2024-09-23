import { z } from "zod";
import { Newsletters_Schema } from "@utils/types/zod-schema-types";

export type Newsletter = z.infer<typeof Newsletters_Schema>[number];
export type Author = Newsletter["authors"][number];
