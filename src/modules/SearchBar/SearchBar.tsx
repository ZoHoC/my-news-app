import styles from "./SearchBar.module.scss";
import SearchIcon from "../../../public/assets/icons/SearchIcon.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import Button from "@/components/Button/Button";

const SearchBar = () => {
  //   const handleSearch = (e) => {
  //     const newsTitle = e.target.value.toLowerCase();

  //     const filteredNews = data.filter(news => news.title.toLowerCase().includes(newsTitle));

  //     setNews(filteredNews);
  //   };

  //   onChange = { handleSearch };

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["SearchBar"]}>
      <SearchIcon width="16px" height="16px" fill="#A5A5A4" />
      <input placeholder={`Search news`} className={styles["SearchBar-Input"]} />
      {windowWidth > 768 && <Button>search</Button>}
    </div>
  );
};

export default SearchBar;
