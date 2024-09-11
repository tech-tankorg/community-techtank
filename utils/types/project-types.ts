import { z } from "zod";
import { Newsletter_Schema } from "@utils/types/zod-schema-types";

export type Newsletter = z.infer<typeof Newsletter_Schema>;
export type Author = Newsletter[number]["authors"][number];
