import React from "react";
import styles from "@styles/pages/Home.module.css";
import cx from "clsx";
import NewsletterPage from "@components/Newsletter/Newsletter";
import {
  getAllNewsletters,
  getFeaturedNewsletter,
} from "./server-helpers/server-helpers";

const Home = async () => {
  const featuredNewsletter = await getFeaturedNewsletter();
  const newsletters = await getAllNewsletters();

  return (
    <main className={cx("mainContent")}>
      {featuredNewsletter && <NewsletterPage newsletter={featuredNewsletter} />}

      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {newsletters.map((newsletter) => (
          <NewsletterPage key={newsletter.slug} newsletter={newsletter} />
        ))}
      </section>
    </main>
  );
};

export default Home;
