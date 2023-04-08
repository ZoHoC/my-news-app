import { FC, useState } from "react";
import NavBarLink from "@/components/NavBarLink/NavBarLink";
import styles from "./NavBar.module.scss";
import { navData, navDataItem } from "@/utility/navData";

const NavBar: FC = () => {
  const [data, setData] = useState<navDataItem[]>(navData);

  const handleClick = (id: number) => {
    setData(
      data.map((data: navDataItem) => {
        if (data.id === id) {
          return { ...data, isPressed: true };
        } else {
          return { ...data, isPressed: false };
        }
      })
    );
  };

  return (
    <div className={styles["NavBar"]}>
      <div className={styles["NavBar-Grid"]}>
        {data.map(({ icon, title, id, isPressed }) => (
          <NavBarLink
            key={id}
            id={id}
            icon={icon}
            title={title}
            isPressed={isPressed}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
