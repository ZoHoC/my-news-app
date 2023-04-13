import Link from "next/link";
import styles from "./Article.module.scss";
import Image from "next/image";
import FavouriteIcon from "../../../public/assets/icons/FavouriteIcon.svg";
import FavouriteIconFull from "../../../public/assets/icons/FavouriteIconFull.svg";
import { FC } from "react";
import placeholder from "../../../public/assets/images/placeholder.png";
import { useAppDispatch } from "@/utility/hooks";
import { toggleFavourite } from "@/redux/reducer/fetchNewsDataReducer";

const Article: FC<ArticleProps> = ({
  section,
  title,
  imageCaption,
  imageUrl,
  author,
  id,
  isFavourite,
}) => {
  const dispatch = useAppDispatch();

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleFavourite(id));
  };

  return (
    <article className={styles["Article"]}>
      <Link href={"#"}>
        <figure className={styles["Article-Figure"]}>
          <Image
            src={imageUrl ? imageUrl : placeholder}
            alt={imageCaption ? imageCaption : "No caption"}
            className={styles["Article-Image"]}
            width={440}
            height={293}
          />
        </figure>
        <div className={styles["Article-Wrapper"]}>
          <div className={styles["Article-Container"]}>
            <p className={styles["Article-NewsSection"]}>{section}</p>
            <div className={styles["Article-Icon"]} onClick={handleIconClick}>
              {isFavourite ? <FavouriteIconFull /> : <FavouriteIcon />}
            </div>
          </div>
          <h2 className={styles["Article-Title"]}>{title}</h2>
          <p className={styles["Article-Author"]}>{author}</p>
        </div>
      </Link>
    </article>
  );
};

interface ArticleProps {
  section: string;
  title: string;
  imageCaption: string;
  imageUrl: string;
  author: string;
  id: string;
  isFavourite: boolean;
}

export default Article;
