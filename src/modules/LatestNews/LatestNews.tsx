import styles from "./LatestNews.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/assets/icons/ArrowRight.svg";
import LatestNewsArticle from "@/components/LatestNewsArticle/LatestNewsArticle";

const LatestNews = () => {
  return (
    <aside className={styles["LatestNews"]}>
      <div className={styles["LatestNews-Wrapper"]}>
        <div className={styles["LatestNews-OuterRing"]}>
          <div className={styles["LatestNews-InnerRing"]}></div>
        </div>
        <h2 className={styles["LatestNews-Title"]}>Latest news</h2>
      </div>
      <div className={styles["LatestNews-Board"]}>
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
        <LatestNewsArticle />
      </div>
      <div className={styles["LatestNews-Wrapper"]}>
        <Link href={"#"} className={styles["LatestNews-Link"]}>
          See all news
          <ArrowRight />
        </Link>
      </div>
    </aside>
  );
};

export default LatestNews;
