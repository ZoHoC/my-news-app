import HomeIcon from "../../public/assets/icons/HomeIcon.svg";
import NewsIcon from "../../public/assets/icons/NewsIcon.svg";
import BusinessIcon from "../../public/assets/icons/BusinessIcon.svg";
import HealthIcon from "../../public/assets/icons/HealthIcon.svg";
import ScienceIcon from "../../public/assets/icons/ScienceIcon.svg";
import SportsIcon from "../../public/assets/icons/SportsIcon.svg";
import TechnologyIcon from "../../public/assets/icons/TechnologyIcon.svg";
import FavouriteIconFull from "../../public/assets/icons/FavouriteIconFull.svg";

const iconMap: IconMap = {
  Home: <HomeIcon />,
  General: <NewsIcon />,
  Business: <BusinessIcon />,
  Health: <HealthIcon />,
  Science: <ScienceIcon />,
  Sports: <SportsIcon />,
  Technology: <TechnologyIcon />,
  Favourite: <FavouriteIconFull />,
};

export interface IconMap {
  [key: string]: JSX.Element;
}

export { iconMap };
