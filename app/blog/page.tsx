import React from "react";
import styles from "@styles/pages/Home.module.css";
import cx from "clsx";
import ContentCard from "@components/ContentCard/ContentCard";
import {
  getAllArticles,
  getFeaturedArticles,
} from "./server-helpers/server-helpers";

const BlogHome = async () => {
  const featuredArticles = await getFeaturedArticles();
  const blogs = await getAllArticles();

  return (
    <main className={cx("mainContent")}>
      {featuredArticles && <ContentCard content={featuredArticles} />}

      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {blogs.map((blog) => (
          <ContentCard key={blog.slug} content={blog} />
        ))}
      </section>
    </main>
  );
};

export default BlogHome;
