import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  isSecondary = false,
  isTertiary = false,
  handleClick,
  children,
}) => {
  let modifierClass = styles["Button"];

  switch (true) {
    case isSecondary:
      modifierClass = `${styles["Button"]} ${styles["Button_secondary"]}`;
      break;
    case isTertiary:
      modifierClass = `${styles["Button"]} ${styles["Button_tertiary"]}`;
      break;
    default:
      modifierClass;
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
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export default Button;
