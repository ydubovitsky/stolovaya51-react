import FeatureComponent from "./components/feature/feature.component";
import HeroComponent from "./components/hero/hero.component";
import LocationComponent from "./components/location/location.component";
import MenuComponent from "./components/menu/menu.component";
import styles from "./main.module.css";

const MainPage: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <HeroComponent />
      <FeatureComponent />
      <MenuComponent />
      <LocationComponent />
    </div>
  );
};

export default MainPage;
