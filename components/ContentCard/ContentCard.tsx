import React from "react";
import styles from "./ContentCard.module.css";
import type { Newsletter, Blog } from "@utils/types/project-types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  content: Newsletter | Blog;
  subRoute: string;
}

const ContentCard = ({ content, subRoute }: Props) => {
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
            {content.featured_content ? "Inside the tank" : content._type}
          </p>
          <Link href={`/${subRoute}/${content.slug}`} className="genericLink">
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
              <div>
                <p className={styles.authorItems}>
                  {content.authors[0].name}
                  {content.authors.length > 1 && <span> & others</span>}
                </p>
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

export default ContentCard;
