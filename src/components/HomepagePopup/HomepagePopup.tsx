import Button from "../Button/Button";
import styles from "./HomepagePopup.module.scss";

const HomepagePopup = () => {
  return (
    <div className={styles["HomepagePopup"]}>
      <div className={styles["HomepagePopup_overlay"]}>
        <div className={styles["HomepagePopup-Inner"]}>
          <div className={` ${styles["HomepagePopup-Container"]} ${styles["HomepagePopup-Container_gap"]}`}>
            <p className={styles["HomepagePopup-Title"]}>Make MyNews your homepage</p>
            <p className={styles["HomepagePopup-Subtitle"]}>Every day discover what’s trending on the internet!</p>
          </div>
          <div className={styles["HomepagePopup-Container"]}>
            <Button
              isSecondary
              handleClick={function (): {} {
                throw new Error("Function not implemented.");
              }}
            >
              get
            </Button>
            <p className={styles["HomepagePopup-Title"]}>No, thanks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepagePopup;
