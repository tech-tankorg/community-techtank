import React from "react";
import styles from "@styles/pages/Home.module.css";
import cx from "clsx";
import ContentCard from "@components/ContentCard/ContentCard";
import {
  getAllNewsletters,
  getFeaturedNewsletter,
} from "./server-helpers/server-helpers";

const Home = async () => {
  const featuredNewsletter = await getFeaturedNewsletter();
  const newsletters = await getAllNewsletters();

  return (
    <main className={cx("mainContent")}>
      {featuredNewsletter && (
        <ContentCard
          content={featuredNewsletter}
          subRoute={featuredNewsletter._type}
        />
      )}

      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {newsletters.map((newsletter) => (
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

export default Home;
