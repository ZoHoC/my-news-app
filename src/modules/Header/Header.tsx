import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <header className={styles["Header"]}>
      <div className={styles["Header-Inner"]}>
        <div className={styles["Header-Wrapper"]}>
          <p className={styles["Header-Title"]}>
            <span className={styles["Header-Title_accent"]}>My</span>News
          </p>
          <Hamburger size={24} color="#1D1D1B" toggled={isOpen} toggle={setOpen} rounded hideOutline={false} />
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
