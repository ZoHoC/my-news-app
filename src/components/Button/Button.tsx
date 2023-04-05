import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ isSecondary = false, handleClick, children }) => {
  let modifierClass = "";

  switch (true) {
    case isSecondary:
      modifierClass = `${styles["Button"]} ${styles["Button_secondary"]}`;
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
  isSecondary: boolean;
  children: ReactNode;
  handleClick: () => {};
}
export default Button;
