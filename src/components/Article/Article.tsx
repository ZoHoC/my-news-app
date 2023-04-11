import Link from "next/link";
import styles from "./Article.module.scss";
import Image from "next/image";
import FavouriteIcon from "../../../public/assets/icons/FavouriteIcon.svg";
import { FC } from "react";
import placeholder from "../../../public/assets/images/placeholder.png";

const Article: FC<ArticleProps> = ({
  section,
  title,
  imageCaption,
  imageUrl,
  author,
}) => {
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
            <FavouriteIcon />
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
}

export default Article;
