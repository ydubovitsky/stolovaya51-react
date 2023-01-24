import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./location.module.css";
import TitleComponent from "../../../../common/atomic-components/title/title.component";
const Fade = require("react-reveal/Fade");

const defaultState = {
  center: [55.861878, 37.625041],
  zoom: 18,
};

const LocationComponent: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <TitleComponent name="Как нас найти?" />
      <div className={styles["location-container"]}>
        <div className={styles["address-container"]}>
          <h1>Наш адрес:</h1>
          <h2>г.Москва, ул. Декабристов 51с5</h2>
        </div>
        <YMaps>
          <Map defaultState={defaultState} width={"100%"} height={"500px"}>
            <Placemark geometry={[55.861878, 37.625041]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default LocationComponent;
