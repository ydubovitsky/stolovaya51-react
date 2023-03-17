import styles from "./download.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import screen1 from "./images/screen1.png";
import screen2 from "./images/screen2.png";
import qrcode from "./images/qrcode.png";
import { Slide } from "react-awesome-reveal";
import { REACT_APP_DOWNLOAD_ANDROID_APP_LINK } from "../../../../../constants";
import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";

const DownloadComponent: React.FC = (): JSX.Element => {
  return (
    <div id="explanation" className={styles["container"]}>
      <Slide cascade={true} direction="right">
        <div className={cn(styles["column"], styles["info"])}>
          <div className={styles["header"]}>
            <h1>"Почему стоит скачать наше приложение?"</h1>
            <div className={styles["description"]}>
              <p>Наряду с основными особенностями...</p>
            </div>
          </div>
          <div className={styles["points"]}>
            <p className={styles["point"]}>Всегда под рукой</p>
            <p className={styles["point"]}>Приятный и функциональный дизайн</p>
            <p className={styles["point"]}>
              Своевременное обновление меню на каждый день
            </p>
            <p className={styles["point"]}>
              Регулярные обновления и обратная связь с разработчиком
            </p>
          </div>
        </div>
      </Slide>
      <Slide cascade={true} direction="left">
        <div className={styles["column"]}>
          <img className={styles["screen"]} src={screen1} alt="" />
        </div>
      </Slide>
      <Slide cascade={true} direction="left">
        <div className={styles["column"]}>
          <img className={styles["screen"]} src={screen2} alt="" />
        </div>
      </Slide>
      <Slide cascade={true} direction="left">
        <div className={cn(styles["column"], styles["qrcode"])}>
          <h2>
            Наведите камеру вашего мобильного телефона на код и скачайте наше
            приложение
          </h2>
          <img className={styles["screen"]} src={qrcode} alt="" />
          <p>
            или просто нажмите на кнопку ниже (временно доступна только андроид
            версия)...
          </p>
          <Link
            className={styles["download-button"]}
            target="_blank"
            to={REACT_APP_DOWNLOAD_ANDROID_APP_LINK}
          >
            <AtomicButtonComponent name="Скачать приложение" />
          </Link>
        </div>
      </Slide>
    </div>
  );
};

export default DownloadComponent;
