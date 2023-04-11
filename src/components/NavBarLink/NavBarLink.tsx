import Link from "next/link";
import styles from "./NavBarLink.module.scss";
import { FC, ReactNode } from "react";

const NavBarLink: FC<NavBarLinkProps> = ({
  id,
  icon,
  title,
  link,
  isPressed,
  handleClick,
}) => {
  let modifierClass = styles["NavBarLink"];

  if (isPressed) {
    modifierClass = `${styles["NavBarLink"]} ${styles["NavBarLink_clicked"]}`;
  }

  return (
    <Link href={link} className={modifierClass} onClick={() => handleClick(id)}>
      {icon}
      <p className={styles["NavBarLink-Title"]}>{title}</p>
    </Link>
  );
};

interface NavBarLinkProps {
  id: number;
  icon: ReactNode;
  title: string;
  link: string;
  isPressed: boolean;
  handleClick: (id: number) => void;
}

export default NavBarLink;
