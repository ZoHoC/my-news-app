import { FC, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import { Squash as Hamburger } from "hamburger-react";
import colorStyles from "@/styles/abstracts/colorStyles";
import NavBar from "../NavBar/NavBar";

const Header: FC<HeaderProps> = ({ windowWidth, isOpen, setOpen }) => {
  useEffect(() => {
    document.body.style.overflow =
      windowWidth < 768 ? (isOpen ? "hidden" : "") : (setOpen(false), "");
  }, [isOpen, windowWidth]);

  return (
    <header className={styles["Header"]}>
      <div className={styles["Header-Inner"]}>
        <div
          className={
            isOpen
              ? `${styles["Header-Wrapper"]} ${styles["Header-Wrapper_open"]}`
              : `${styles["Header-Wrapper"]}`
          }
        >
          <p className={styles["Header-Title"]}>
            <span className={styles["Header-Title_accent"]}>My</span>News
          </p>
          {windowWidth < 768 && (
            <Hamburger
              size={24}
              color={colorStyles.primaryColor}
              toggled={isOpen}
              toggle={setOpen}
              rounded
              hideOutline={false}
            />
          )}
        </div>
        <SearchBar windowWidth={windowWidth} />
      </div>
      {windowWidth < 768 && isOpen && (
        <div className={styles["Header-Navbar"]}>
          <NavBar />
        </div>
      )}
    </header>
  );
};

interface HeaderProps {
  windowWidth: number;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Header;
