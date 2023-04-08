import { FC } from "react";
import Button from "../Button/Button";
import styles from "./HomepagePopup.module.scss";

const HomepagePopup: FC<HomepagePopupProps> = ({ setIsDisplayed }) => {
  function handleDisplay() {
    localStorage.setItem("displayToken", "activated");
    setIsDisplayed(false);
  }

  return (
    <div className={styles["HomepagePopup"]}>
      <div className={styles["HomepagePopup_overlay"]}>
        <div className={styles["HomepagePopup-Inner"]}>
          <div
            className={` ${styles["HomepagePopup-Container"]} ${styles["HomepagePopup-Container_gap"]}`}
          >
            <p className={styles["HomepagePopup-Title"]}>
              Make MyNews your homepage
            </p>
            <p className={styles["HomepagePopup-Subtitle"]}>
              Every day discover what’s trending on the internet!
            </p>
          </div>
          <div className={styles["HomepagePopup-Container"]}>
            <Button isSecondary handleClick={handleDisplay}>
              get
            </Button>
            <Button isTertiary handleClick={handleDisplay}>
              No, thanks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface HomepagePopupProps {
  setIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default HomepagePopup;
