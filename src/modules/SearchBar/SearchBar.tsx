import styles from "./SearchBar.module.scss";
import SearchIcon from "../../../public/assets/icons/SearchIcon.svg";
import Button from "@/components/Button/Button";
import { FC } from "react";

const SearchBar: FC<SearchBarProps> = ({ windowWidth, handleSearch }) => {
  return (
    <div className={styles["SearchBar"]}>
      <SearchIcon />
      <input
        placeholder={`Search news`}
        className={styles["SearchBar-Input"]}
        onChange={handleSearch}
      />
      {windowWidth > 768 && <Button>search</Button>}
    </div>
  );
};

interface SearchBarProps {
  windowWidth: number;
  handleSearch: (e: any) => void;
}

export default SearchBar;
