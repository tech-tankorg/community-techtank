import React from "react";
import styles from "./ContentPage.module.css";
import cx from "clsx";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS } from "@lib/mdxComponents";
import Image from "next/image";

import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";

import type { Blog, Newsletter, Headers } from "@utils/types/project-types";

interface Props {
  content: Blog | Newsletter;
  headers: Headers;
  date: string;
}

const ContentPage = ({ content, date, headers }: Props) => {
  return (
    <main className={cx("mainContent", styles.mainWrapper)}>
      <p className={styles.articleDate}>{date}</p>
      <h1 className={styles.articleTitle}>{content.title}</h1>
      <article className={styles.contentWrapper}>
        <section className={styles.content}>
          <Suspense fallback={"loading..."}>
            <MDXRemote
              source={content.content ?? ""}
              components={COMPONENTS}
              options={{
                mdxOptions: {
                  remarkPlugins: [[remarkGfm, { singleTilde: false }], emoji],
                },
              }}
            />
          </Suspense>
          <section className={styles.metaData}>
            {content.authors.map((author, index) => {
              return (
                <div key={index} className={styles.author}>
                  <Image
                    src={author.author_image.url}
                    alt={"Image of author"}
                    width={author.author_image.width}
                    height={author.author_image.height}
                    className={styles.authorImg}
                  />
                  <span className={styles.authorName}>{author.name}</span>
                </div>
              );
            })}
          </section>
        </section>

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
      </article>
    </main>
  );
};

export default ContentPage;
