import styles from "./LatestNews.module.scss";
import Link from "next/link";
import ArrowRight from "../../../public/assets/icons/ArrowRight.svg";
import LatestNewsArticle from "@/components/LatestNewsArticle/LatestNewsArticle";
import { useAppDispatch, useAppSelector } from "@/utility/hooks";
import { fetchNewsData } from "@/redux/actions/fetchNewsDataAction";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const LatestNews = () => {
  const [hasMore, setHasMore] = useState(true);
  const { newsData } = useAppSelector(state => state.news);
  const dispatch = useAppDispatch();

  const fetchMoreData = () => {
    dispatch(
      fetchNewsData({ section: "all", limit: 30, offset: newsData.length })
    ).then(action => {
      if (action.payload.length === 0) {
        setHasMore(false);
      }
    });
  };

  return (
    <aside className={styles["LatestNews"]}>
      <div className={styles["LatestNews-Wrapper"]}>
        <div className={styles["LatestNews-OuterRing"]}>
          <div className={styles["LatestNews-InnerRing"]}></div>
        </div>
        <h2 className={styles["LatestNews-Title"]}>Latest news</h2>
      </div>
      <div id="scrollableDiv" className={styles["LatestNews-Board"]}>
        <InfiniteScroll
          dataLength={newsData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more news to show.</p>}
        >
          {newsData.map(({ title, publishedDate }, index) => (
            <LatestNewsArticle
              key={index}
              title={title}
              publishedDate={publishedDate}
            />
          ))}
        </InfiniteScroll>
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
