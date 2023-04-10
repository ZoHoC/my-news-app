import styles from "./LatestNews.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/assets/icons/ArrowRight.svg";
import LatestNewsArticle from "@/components/LatestNewsArticle/LatestNewsArticle";
import { useAppSelector } from "@/utility/hooks";

const LatestNews = () => {
  const { newsData } = useAppSelector(state => state.news);

  return (
    <aside className={styles["LatestNews"]}>
      <div className={styles["LatestNews-Wrapper"]}>
        <div className={styles["LatestNews-OuterRing"]}>
          <div className={styles["LatestNews-InnerRing"]}></div>
        </div>
        <h2 className={styles["LatestNews-Title"]}>Latest news</h2>
      </div>
      <div className={styles["LatestNews-Board"]}>
        {newsData.map(({ id, title, publishedDate }) => (
          <LatestNewsArticle
            key={id}
            title={title}
            publishedDate={publishedDate}
          />
        ))}
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
