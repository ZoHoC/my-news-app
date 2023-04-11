import { FC, useEffect, useState } from "react";
import styles from "./ToggleNews.module.scss";
import { toggleNewsData, toggleNewsDataItem } from "@/utility/toggleNewsData";
import LatestNews from "../LatestNews/LatestNews";

const ToggleNews: FC<ToggleNewsProps> = ({
  windowWidth,
  showLatestNews,
  setShowLatestNews,
}) => {
  const [data, setData] = useState<toggleNewsDataItem[]>(toggleNewsData);

  useEffect(() => {
    document.body.style.overflow = data[1].isPressed ? "hidden" : "";
  }, [data[1].isPressed, windowWidth]);

  const handleClick = (id: number) => {
    const updatedData = data.map(item =>
      item.id === id
        ? { ...item, isPressed: true }
        : { ...item, isPressed: false }
    );
    setData(updatedData);
    id === 2 ? setShowLatestNews(true) : setShowLatestNews(false);
  };

  return (
    <div className={styles["ToggleNews"]}>
      <div className={styles["ToggleNews-Inner"]}>
        {data.map(({ id, content, isPressed }) => (
          <div
            key={id}
            className={`${styles["ToggleNews-Text"]} ${
              isPressed ? styles["ToggleNews-Text_pressed"] : ""
            }`}
            onClick={() => handleClick(id)}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

interface ToggleNewsProps {
  windowWidth: number;
  showLatestNews: boolean;
  setShowLatestNews: any;
}

export default ToggleNews;
