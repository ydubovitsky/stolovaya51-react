import TitleComponent from "../../../../common/atomic-components/title/title.component";
import styles from "./feature.module.css";
import featuresMap from "./svg";
import { Fade } from "react-awesome-reveal";

const FeatureComponent: React.FC = () => {
  const showFeaturesElements = () => {
    return Array.from(featuresMap).map(([key, value]) => (
      <Fade cascade>
        <div className={styles["feature-container"]}>
          <div className={styles["feature-icon-container"]}>{value}</div>
          <div className={styles["feature-title"]}>
            <p>{key.name}</p>
          </div>
          <div className={styles["feature-description"]}>
            <p>{key.description}</p>
          </div>
        </div>
      </Fade>
    ));
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["container-title"]}>
        <TitleComponent name="Наши особенности" />
      </div>
      <div className={styles["features"]}>{showFeaturesElements()}</div>
    </div>
  );
};

export default FeatureComponent;
