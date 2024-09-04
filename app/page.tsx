import styles from "@styles/pages/Home.module.css";
import Newsletter from "@components/Newsletter/Newsletter";

import { Articles } from "@utils/constants/dummyData";

const Home = () => {
  return (
    <main className={`mainContent ${styles.mainWrapper}`}>
      <Newsletter
        categoryTitle={Articles[0].categoryTitle}
        articleTitle={Articles[0].articleTitle}
        articleDescription={Articles[0].articleDescription}
        author={Articles[0].author}
        featureArticle
      />
      <h2 className={styles.pageHeader}>Past newsletters</h2>
      <p className={styles.pageSubHeader}>What have we been up too?</p>

      <section className={styles.newsletterWrapper}>
        {Articles.map((article) => (
          <Newsletter
            key={article.id}
            categoryTitle={article.categoryTitle}
            articleTitle={article.articleTitle}
            articleDescription={article.articleDescription}
            author={article.author}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
