import React from "react";
import styles from "@styles/pages/Newsletter.module.css";
import cx from "clsx";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS } from "@lib/mdxComponents";
import { generateMetadataObject } from "@utils/constants";
import { getNewsletter } from "../server-helpers/server-helpers";
import Image from "next/image";

import remarkGfm from "remark-gfm";
import { format } from "date-fns";

interface Params {
  params: { slug: string };
}
export const generateMetadata = async ({ params }: Params) => {
  const { newsletter } = await getNewsletter(params.slug);

  const metaData = generateMetadataObject(
    newsletter.title,
    newsletter.description,
    newsletter.news_image.url
  );

  return metaData;
};

const NewsletterPage = async ({ params }: Params) => {
  const { newsletter, headers } = await getNewsletter(params.slug);

  const formattedScheduledDate = format(
    new Date(newsletter.scheduled_date.replace("-", "/")),
    "MMM do, yyyy"
  );

  return (
    <main className={cx("mainContent", styles.mainWrapper)}>
      <p className={styles.articleDate}>{formattedScheduledDate}</p>
      <h1 className={styles.articleTitle}>{newsletter.title}</h1>
      <article className={styles.contentWrapper}>
        <section className={styles.content}>
          <Suspense fallback={"loading..."}>
            <MDXRemote
              source={newsletter.content ?? ""}
              components={COMPONENTS}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </Suspense>
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

export default NewsletterPage;
