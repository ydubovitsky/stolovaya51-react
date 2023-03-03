import styles from './download.module.css';
import cn from 'classnames'
import screen5 from './images/screen5.png';
import { Slide } from "react-awesome-reveal";

const DownloadComponent : React.FC = () : JSX.Element => {

  return (
    <div id="explanation" className={styles["container"]}>
      <Slide cascade={true} direction='right'>
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
            <p className={styles["point"]}>Своевременное обновление меню на каждый день</p>
            <p className={styles["point"]}>Регулярные обновления и обратная связь с разработчиком</p>
          </div>
        </div>
      </Slide>
      <Slide cascade={true} direction='left'>
        <div className={styles["column"]}>
          <img className={styles["screen"]} src={screen5} alt=""/>
        </div>
      </Slide>
    </div>
  )
}

export default DownloadComponent;
