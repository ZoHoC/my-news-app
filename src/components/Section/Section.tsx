import { FC, ReactNode } from "react";
import styles from "./Section.module.scss";

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles["Section"]}>
      <div className={styles["Section-Inner"]}>{children}</div>
    </section>
  );
};

interface SectionProps {
  children: ReactNode;
}

export default Section;
