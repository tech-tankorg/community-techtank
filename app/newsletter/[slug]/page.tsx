import React from "react";
import styles from "@styles/pages/Newsletter.module.css";
import cx from "clsx";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS } from "@lib/mdxComponents";
import { generateMetadataObject } from "@utils/constants";
import { getNewsletter } from "../server-helpers/server-helpers";
import Image from "next/image";

interface Params {
  params: { slug: string };
}
export const generateMetadata = async ({ params }: Params) => {
  const { newsletter } = await getNewsletter(params.slug);

  const metaData = generateMetadataObject(
    newsletter.title,
    newsletter.description
  );

  return metaData;
};

const Newsletter = async ({ params }: Params) => {
  const { newsletter, headers } = await getNewsletter(params.slug);

  return (
    <main className={cx("mainContent", styles.mainWrapper)}>
      <article className={styles.content}>
        <p className={styles.articleDate}>{newsletter.scheduled_date}</p>
        <h1 className={styles.articleTitle}>{newsletter.title}</h1>
        <Suspense fallback={"loading..."}>
          <MDXRemote
            source={newsletter.content ?? ""}
            components={COMPONENTS}
          />
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
          {newsletter.authors.map((author, index) => {
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
      </article>
    </main>
  );
};

export default Newsletter;
