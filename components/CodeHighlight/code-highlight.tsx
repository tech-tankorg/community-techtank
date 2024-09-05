import { codeToHtml } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

import styles from "./code-highlight.module.css";
import "./code-highlight-mod.css";

interface Props {
  code: string;
  lang: string;
}
const Code_highlight = async ({ code, lang }: Props) => {
  const highlighted_code = await codeToHtml(code.trim(), {
    lang,
    theme: "material-theme-darker",
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });

  return (
    <div
      className={styles.CodeContainer}
      dangerouslySetInnerHTML={{ __html: highlighted_code }}
    />
  );
};

export default Code_highlight;
