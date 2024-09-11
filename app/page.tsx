import React, { useEffect } from "react";
import styles from "@styles/pages/Home.module.css";
import cx from "clsx";
import Newsletter from "@components/Newsletter/Newsletter";
// import { Articles } from "@utils/constants/dummyData";
import { client, getAllNewsletters } from "../sanity/lib/client";

const Home = async () => {
  const newsletters = await getAllNewsletters();
  return (
    <main className={cx("mainContent")}>
      {/*<div>{JSON.stringify(newsletters)}</div>*/}
      <Newsletter
        categoryTitle={"Feature"}
        articleTitle={newsletters[0].title}
        articleDescription={newsletters[0].content}
        author={{ name: newsletters[0].authorNames[0], title: "Author" }}
        featureArticle
      />
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
