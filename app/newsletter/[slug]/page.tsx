import React from "react";
import styles from "@styles/pages/Newsletter.module.css";
import cx from "classnames";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS } from "@lib/mdxComponents";
import { getHeaders } from "@lib/parsers";

import { dummyArticle } from "@utils/constants/dummyData";

const Newsletter = () => {
  const headers = getHeaders(dummyArticle);
  return (
    <main className={cx("mainContent", styles.mainWrapper)}>
      <article className={styles.content}>
        <p className={styles.articleDate}>Jun 18th, 2024</p>
        <h1 className={styles.articleTitle}>June Newsletter 2024</h1>
        <Suspense fallback={"loading..."}>
          <MDXRemote source={dummyArticle} components={COMPONENTS} />
        </Suspense>
        <section className={styles.tableOfContents}>
          <p className={styles.tableOfContents__Title}>On this page</p>
          {headers.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.slug}`}
              className={styles.tableOfContents__topic}
              data-level={heading.level}
            >
              {heading.heading}
            </a>
          ))}
        </section>
        <section className={styles.metaData}>
          <div className={styles.author}>
            <span className={styles.authorImg}></span>
            <span className={styles.authorName}>Julie Coden</span>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Newsletter;
