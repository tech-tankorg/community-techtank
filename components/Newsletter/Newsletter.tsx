import React from "react";
import styles from "./Newsletter.module.css";
import { Newsletter } from "@utils/types/project-types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  newsletter: Newsletter;
}

const NewsletterPage = ({ newsletter }: Props) => {
  return (
    <section className={styles.containerWrapper}>
      <article className={styles.mainWrapper}>
        <div className={styles.newsletterBackgroundWrapper}>
          <Image
            src={newsletter.newsletter_image.url}
            alt="text"
            objectFit="cover"
            fill={true}
            className={styles.newsletterImage}
          />
        </div>
        <div className={styles.articleMetadata}>
          <p
            className={styles.categoryTitle}
            data-feature={String(newsletter.featured_content)}
          >
            {newsletter.featured_content
              ? "Inside the tank"
              : newsletter.category}
          </p>
          <Link href={`/newsletter/${newsletter.slug}`} className="genericLink">
            <h3 className={styles.articleTitle}>{newsletter.title}</h3>
          </Link>

          <p className={styles.articleDescription}>{newsletter.content}</p>

          {!newsletter.featured_content && (
            <section className={styles.author}>
              <Image
                src={newsletter.authors[0].author_image.url}
                alt={`author image`}
                className={styles.authorBackground}
                width={newsletter.authors[0].author_image.width}
                height={newsletter.authors[0].author_image.height}
              />
              {/* // TODO: if multiple authors, show first author & 'et al' */}
              <div>
                <p className={styles.authorItems}>
                  {newsletter.authors[0].name}
                </p>
                <p className={styles.authorItems}>
                  {newsletter.authors[0].author_title}
                </p>
              </div>
            </section>
          )}
        </div>
      </article>
    </section>
  );
};

export default NewsletterPage;
