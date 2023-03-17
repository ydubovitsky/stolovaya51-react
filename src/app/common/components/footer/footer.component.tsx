import styles from "./footer.module.css";
import imageSrc from "./images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { REACT_APP_DOWNLOAD_ANDROID_APP_LINK } from "../../../../constants";

const FooterComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["about-container"]}>
        <div className={styles["logo-container"]}>
          <div className={styles["logo"]}>Столовая51 в НИИ ТП</div>
          <div className={styles["anchors-container"]}>
            <p>
              <Link to={"/"}>Главная страница |</Link>
            </p>
            <p>
              <Link to={"/term-of-use"}>Пользовательское соглашение |</Link>
            </p>
            <p>
              <Link to={"/privacy-policy"}>Политика конфеденциальности |</Link>
            </p>
            <p><Link target="_blank" to={REACT_APP_DOWNLOAD_ANDROID_APP_LINK}>Скачать приложение |</Link></p>
          </div>
        </div>
        <div className={styles["contacts-container"]}>
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} /> Как нас найти?
          </p>
          <p>г.Москва, ул. Декабристов 51с5</p>
          <p></p>
        </div>
      </div>
      <div
        className={styles["line-image-container"]}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className={styles["author-container"]}>
        <p>
          © 2023 - {new Date().getFullYear()} All Rights Reserved. Created By
          <a href="http://ydubovitsky.ru"> Y.Dubovitsky</a>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
