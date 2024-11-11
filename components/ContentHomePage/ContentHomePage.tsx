import React from "react";
import styles from "./ContentHomePage.module.css";
import cx from "clsx";
import ContentCard from "@components/ContentCard/ContentCard";

import type {
  Blog,
  Blogs,
  Newsletter,
  Newsletters,
} from "@utils/types/project-types";

interface Props {
  featured: Newsletter | Blog;
  content: Newsletters | Blogs;
}

const ContentHomePage = ({ featured, content }: Props) => {
  return (
    <main className={cx("mainContent")}>
      {featured && <ContentCard content={featured} subRoute={featured._type} />}

      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {content.map((newsletter) => (
          <ContentCard
            key={newsletter.slug}
            content={newsletter}
            subRoute={newsletter._type}
          />
        ))}
      </section>
    </main>
  );
};

export default ContentHomePage;
