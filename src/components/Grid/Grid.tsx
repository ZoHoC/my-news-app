import styles from "./Grid.module.scss";
import { FC, ReactNode } from "react";

const Grid: FC<GridProps> = ({ title, children }) => {
  return (
    <div className={styles["Grid"]}>
      <div className={styles["Grid-Header"]}>
        {title && <h2 className={styles["Grid-Title"]}>{title}</h2>}
      </div>
      {children}
    </div>
  );
};

interface GridProps {
  title?: string;
  children: ReactNode;
}

export default Grid;
