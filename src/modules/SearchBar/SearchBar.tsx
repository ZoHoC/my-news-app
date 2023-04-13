import styles from "./SearchBar.module.scss";
import SearchIcon from "../../../public/assets/icons/SearchIcon.svg";
import Button from "@/components/Button/Button";
import { FC } from "react";

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <div className={styles["SearchBar"]}>
      <SearchIcon />
      <input
        placeholder={`Search news`}
        className={styles["SearchBar-Input"]}
        onChange={handleSearch}
      />
      <div className={styles["SearchBar-Button"]}>
        <Button>search</Button>
      </div>
    </div>
  );
};

interface SearchBarProps {
  handleSearch: (e: any) => void;
}

export default SearchBar;
