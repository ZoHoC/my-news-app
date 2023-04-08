import styles from "./Grid.module.scss";
import { FC, ReactNode } from "react";

const Grid: FC<GridProps> = ({ children }) => {
  return <div className={styles["Grid"]}>{children}</div>;
};

interface GridProps {
  children: ReactNode;
}

export default Grid;
