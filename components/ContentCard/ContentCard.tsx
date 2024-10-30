import React from "react";
import styles from "./content.module.css";
import type { Newsletter, Blog } from "@utils/types/project-types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  content: Newsletter | Blog;
}

const content = ({ content }: Props) => {
  return (
    <section className={styles.containerWrapper}>
      <article className={styles.mainWrapper}>
        <div className={styles.newsletterBackgroundWrapper}>
          <Image
            src={content.seo_image.url}
            alt="text"
            objectFit="cover"
            fill={true}
            className={styles.newsletterImage}
          />
        </div>
        <div className={styles.articleMetadata}>
          <p
            className={styles.categoryTitle}
            data-feature={String(content.featured_content)}
          >
            {content.featured_content ? "Inside the tank" : "newsletter"}
          </p>
          <Link href={`/newsletter/${content.slug}`} className="genericLink">
            <h3 className={styles.articleTitle}>{content.title}</h3>
          </Link>

          <p className={styles.articleDescription}>{content.content}</p>

          {!content.featured_content && (
            <section className={styles.author}>
              <Image
                src={content.authors[0].author_image.url}
                alt={`author image`}
                className={styles.authorBackground}
                width={content.authors[0].author_image.width}
                height={content.authors[0].author_image.height}
              />
              {/* // TODO: if multiple authors, show first author & 'et al' */}
              <div>
                <p className={styles.authorItems}>{content.authors[0].name}</p>
                <p className={styles.authorItems}>
                  {content.authors[0].author_title}
                </p>
              </div>
            </section>
          )}
        </div>
      </article>
    </section>
  );
};

export default content;
