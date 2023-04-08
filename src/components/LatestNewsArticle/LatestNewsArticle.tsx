import styles from "./LatestNewsArticle.module.scss";

const LatestNewsArticle = () => {
  return (
    <article className={styles["LatestNewsArticle"]}>
      <p className={styles["LatestNewsArticle-Time"]}>14:30</p>
      <h3 className={styles["LatestNewsArticle-Title"]}>
        Maintain Your Pc S Performance With Pc Programs
      </h3>
    </article>
  );
};

export default LatestNewsArticle;
