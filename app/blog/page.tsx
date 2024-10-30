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
      {featuredArticles && (
        <ContentCard
          content={featuredArticles}
          subRoute={featuredArticles._type}
        />
      )}

      <h2 className={styles.pageHeader}>Past Articles</h2>

      <section className={styles.newsletterWrapper}>
        {blogs.map((blog) => (
          <ContentCard key={blog.slug} content={blog} subRoute={blog._type} />
        ))}
      </section>
    </main>
  );
};

export default BlogHome;
