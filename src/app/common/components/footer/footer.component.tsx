import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const FooterComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["about-container"]}>
        <div className={styles["logo-container"]}>
          <div className={styles["logo"]}>Кафе в НИИ ТП</div>
          <div className={styles["anchors-container"]}>
            <p>Наверх |</p>
            <p>Особенности |</p>
            <p>Меню |</p>
            <p>Скачать наше приложение</p>
          </div>
        </div>
        <div className={styles["contacts-container"]}>
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} /> Как нас найти?
          </p>
          <p>г.Москва, ул. Декабристов 51с5</p>
          <p>Наш телефон:</p>
          <p>123-45-67</p>
        </div>
      </div>
      <div className={styles["author-container"]}>
        <p>
          © 2023 - {new Date().getFullYear()} All Rights Reserved. Created By
          Yury Dubovitsky
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
