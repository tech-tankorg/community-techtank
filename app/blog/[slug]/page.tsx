import React from "react";
import styles from "@styles/pages/Newsletter.module.css";
import cx from "clsx";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS } from "@lib/mdxComponents";
import { generateMetadataObject } from "@utils/constants";
import { getArticle } from "../server-helpers/server-helpers";
import Image from "next/image";

import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import { format } from "date-fns";

interface Params {
  params: { slug: string };
}
export const generateMetadata = async ({ params }: Params) => {
  const { blog } = await getArticle(params.slug);

  const metaData = generateMetadataObject(
    blog.title,
    blog.description,
    blog.seo_image.url
  );

  return metaData;
};

const NewsletterPage = async ({ params }: Params) => {
  const { blog, headers } = await getArticle(params.slug);

  const formattedScheduledDate = format(
    new Date(blog.scheduled_date.replace("-", "/")),
    "MMM do, yyyy"
  );

  return (
    <main className={cx("mainContent", styles.mainWrapper)}>
      <p className={styles.articleDate}>{formattedScheduledDate}</p>
      <h1 className={styles.articleTitle}>{blog.title}</h1>
      <article className={styles.contentWrapper}>
        <section className={styles.content}>
          <Suspense fallback={"loading..."}>
            <MDXRemote
              source={blog.content ?? ""}
              components={COMPONENTS}
              options={{
                mdxOptions: {
                  remarkPlugins: [[remarkGfm, { singleTilde: false }], emoji],
                },
              }}
            />
          </Suspense>
          <section className={styles.metaData}>
            {blog.authors.map((author, index) => {
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
