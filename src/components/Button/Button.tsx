import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { BlobOptions } from "buffer";

const Button: FC<ButtonProps> = ({ isSecondary = false, isTertiary = false, handleClick, children }) => {
  let modifierClass = "";

  switch (true) {
    case isSecondary:
      modifierClass = `${styles["Button"]} ${styles["Button_secondary"]}`;
      break;
    case isTertiary:
      modifierClass = `${styles["Button"]} ${styles["Button_tertiary"]}`;
      break;
    default:
      modifierClass = styles["Button"];
      break;
  }

  return (
    <button className={modifierClass} onClick={handleClick}>
      {children}
    </button>
  );
};

interface ButtonProps {
  isSecondary?: boolean;
  isTertiary?: boolean;
  children: ReactNode;
  handleClick?: any;
}
export default Button;
