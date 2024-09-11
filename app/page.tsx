import React, { useEffect } from "react";
import styles from "@styles/pages/Home.module.css";
import cx from "clsx";
import NewsletterPage from "@components/Newsletter/Newsletter";
// import { Articles } from "@utils/constants/dummyData";
import { client, getAllNewsletters } from "../sanity/lib/client";

const Home = async () => {
  const newsletters = await getAllNewsletters();
  console.log({ newsletters });
  return (
    <main className={cx("mainContent")}>
      {/*<div>{JSON.stringify(newsletters)}</div>*/}
      <NewsletterPage newsletter={newsletters[0]} />
      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {/*{Articles.map((article) => (*/}
        {/*    <Newsletter*/}
        {/*        key={article.id}*/}
        {/*        categoryTitle={article.categoryTitle}*/}
        {/*        articleTitle={article.articleTitle}*/}
        {/*        articleDescription={article.articleDescription}*/}
        {/*        author={article.author}*/}
        {/*    />*/}
        {/*))}*/}
      </section>
    </main>
  );
};

export default Home;
