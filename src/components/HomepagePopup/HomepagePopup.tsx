import styles from "./HomepagePopup.module.scss";

const HomepagePopup = () => {
  console.log(styles);

  return (
    <div className={styles["HomepagePopup"]}>
      <div className={styles["HomepagePopup_overlay"]}>
        <div className={styles["HomepagePopup-Inner"]}>
          <div className={styles["HomepagePopup-Container"]}>
            <p className={styles["HomepagePopup-Title"]}>Make MyNews your homepage</p>
            <p className={styles["HomepagePopup-Subtitle"]}>Every day discover what’s trending on the internet!</p>
          </div>
          <div className={styles["HomepagePopup-Container"]}>
            <button>GET</button>
            <p className={styles["HomepagePopup-Title"]}>No, thanks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepagePopup;
