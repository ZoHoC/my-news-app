import { FC, useEffect, useState } from "react";
import NavBarLink from "@/components/NavBarLink/NavBarLink";
import styles from "./NavBar.module.scss";
import { useAppDispatch, useAppSelector } from "@/utility/hooks";
import { NavDataItem, toggleChoice } from "@/redux/reducer/navDataReducer";
import { iconMap } from "@/utility/iconMap";

const NavBar: FC = () => {
  const dispatch = useAppDispatch();
  const { navData } = useAppSelector(state => state.navData);
  const [data, setData] = useState<NavDataItem[]>([]);

  useEffect(() => {
    setData(navData.map(item => ({ ...item, icon: iconMap[item.title] })));
  }, [navData]);

  const handleClick = (id: number) => {
    dispatch(toggleChoice(id));
  };

  return (
    <div className={styles["NavBar"]}>
      <div className={styles["NavBar-Grid"]}>
        {data.map(({ icon, title, id, link, isPressed }) => (
          <NavBarLink
            key={id}
            id={id}
            icon={icon}
            title={title}
            link={link}
            isPressed={isPressed}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
