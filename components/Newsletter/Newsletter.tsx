import React from "react";
import styles from "./Newsletter.module.css";

interface Props {
  featureArticle?: boolean;
  categoryTitle: string;
  articleTitle: string;
  articleDescription: string;
  author: {
    name: string;
    title: string;
  };
}

const Newsletter = ({
  featureArticle = false,
  categoryTitle,
  articleTitle,
  articleDescription,
  author,
}: Props) => {
  return (
    <article className={styles.mainWrapper}>
      <div className={styles.background}></div>
      <p className={styles.categoryTitle} date-feature={String(featureArticle)}>
        {featureArticle ? "Inside the tank" : categoryTitle}
      </p>
      <h3 className={styles.articleTitle}>{articleTitle}</h3>
      <p className={styles.articleDescription}>{articleDescription}</p>

      <section className={styles.author}>
        <div className={styles.authorBackground}></div>
        <div>
          <p className={styles.authorItems}>{author.name}</p>
          <p className={styles.authorItems}>{author.title}</p>
        </div>
      </section>
    </article>
  );
};

export default Newsletter;
