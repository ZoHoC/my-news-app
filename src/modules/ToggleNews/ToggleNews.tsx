import { useState } from "react";
import styles from "./ToggleNews.module.scss";
import { toggleNewsData, toggleNewsDataItem } from "@/utility/toggleNewsData";

const ToggleNews = () => {
  const [data, setData] = useState<toggleNewsDataItem[]>(toggleNewsData);

  const handleClick = (id: number) => {
    const updatedData = data.map(item =>
      item.id === id
        ? { ...item, isPressed: true }
        : { ...item, isPressed: false }
    );
    setData(updatedData);
  };

  return (
    <div className={styles.ToggleNews}>
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
  );
};

export default ToggleNews;
