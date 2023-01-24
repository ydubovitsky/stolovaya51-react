import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./dashboard.module.css";
import { Outlet, useNavigate } from "react-router-dom";
const Fade = require("react-reveal/Fade");

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMenuPage = (): void => {
    navigate("/dashboard/menu");
  };

  const navigateToMealPage = (): void => {
    navigate("/dashboard/meal");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["dashboard-container"]}>
        <div className={styles["buttons-container"]}>
          <AtomicButtonComponent
            name="Блюда"
            clickFunction={navigateToMealPage}
          />
          <AtomicButtonComponent
            name="Меню"
            clickFunction={navigateToMenuPage}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
