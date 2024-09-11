import React from "react";
import styles from "./Newsletter.module.css";
import { Newsletter } from "@utils/types/project-types";
import Image from "next/image";

// interface Props {
//   newsletter: Newsletter;
// }

const NewsletterPage = ({ newsletter }) => {
  console.log("newsletter: ", newsletter);
  return (
    <section className={styles.containerWrapper}>
      <article className={styles.mainWrapper}>
        <div className={styles.background}></div>
        <div className={styles.articleMetadata}>
          <p
            className={styles.categoryTitle}
            data-feature={String(newsletter.featured_content)}
          >
            {/* TODO: To show category title */}
            {newsletter.featured_content ? "Inside the tank" : "Newsletter"}
          </p>
          <h3 className={styles.articleTitle}>{newsletter.title}</h3>
          <p className={styles.articleDescription}>{newsletter.content}</p>

          {!newsletter.featured_content && (
            <section className={styles.author}>
              <Image
                src={newsletter.authors[0].url}
                alt={`author image`}
                className={styles.authorBackground}
              />
              // TODO: if multiple authors, show first author & 'et al'
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
