import HomeIcon from "../../public/assets/icons/HomeIcon.svg";
import NewsIcon from "../../public/assets/icons/NewsIcon.svg";
import BusinessIcon from "../../public/assets/icons/BusinessIcon.svg";
import HealthIcon from "../../public/assets/icons/HealthIcon.svg";
import ScienceIcon from "../../public/assets/icons/ScienceIcon.svg";
import SportsIcon from "../../public/assets/icons/SportsIcon.svg";
import TechnologyIcon from "../../public/assets/icons/TechnologyIcon.svg";
import { ReactNode } from "react";

export const navData: navDataItem[] = [
  { id: 1, icon: <HomeIcon />, title: "Home", isPressed: false },
  { id: 2, icon: <NewsIcon />, title: "General", isPressed: false },
  { id: 3, icon: <BusinessIcon />, title: "Business", isPressed: false },
  { id: 4, icon: <HealthIcon />, title: "Health", isPressed: false },
  { id: 5, icon: <ScienceIcon />, title: "Science", isPressed: false },
  { id: 6, icon: <SportsIcon />, title: "Sports", isPressed: false },
  { id: 7, icon: <TechnologyIcon />, title: "Technology", isPressed: false },
];

export interface navDataItem {
  id: number;
  icon: ReactNode;
  title: string;
  isPressed: boolean;
}
