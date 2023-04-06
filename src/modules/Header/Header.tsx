import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["Header"]}>
      <div className={styles["Header-Inner"]}>
        <div className={styles["Header-Wrapper"]}>
          <p className={styles["Header-Title"]}>
            <span className={styles["Header-Title_accent"]}>My</span>News
          </p>
          <div className={styles["Haburger"]}></div>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
