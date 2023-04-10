import { FC } from "react";
import styles from "./LatestNewsArticle.module.scss";

const LatestNewsArticle: FC<LatestNewsArticleProps> = ({
  publishedDate,
  title,
}) => {
  return (
    <article className={styles["LatestNewsArticle"]}>
      <p className={styles["LatestNewsArticle-Time"]}>{publishedDate}</p>
      <h3 className={styles["LatestNewsArticle-Title"]}>{title}</h3>
    </article>
  );
};

interface LatestNewsArticleProps {
  publishedDate: string;
  title: string;
}

export default LatestNewsArticle;
