import Link from "next/link";
import styles from "./Article.module.scss";
import Image from "next/image";
import placeholder from "../../../public/assets/images/placeholder.png";
import FavoriteIcon from "../../../public/assets/icons/FavoriteIcon.svg";

const Article = () => {
  return (
    <article className={styles["Article"]}>
      <Link href={"#"}>
        <figure className={styles["Article-Figure"]}>
          <Image
            src={placeholder}
            alt="placeholder"
            className={styles["Article-Image"]}
          />
        </figure>
        <div className={styles["Article-Wrapper"]}>
          <div className={styles["Article-Container"]}>
            <p className={styles["Article-NewsSection"]}>Technology</p>
            <FavoriteIcon />
          </div>
          <h2 className={styles["Article-Title"]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            tenetur soluta corporis fuga, magni eum vitae laborum obcaecati eos
            rerum ad beatae illo magnam quasi alias? Mollitia eveniet doloribus
            quisquam.
          </h2>
          <p className={styles["Article-Author"]}>Isaac Salazar</p>
        </div>
      </Link>
    </article>
  );
};

export default Article;
