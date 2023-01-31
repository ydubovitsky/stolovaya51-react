import { useEffect } from "react";
import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./dashboard.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { invalidateLoggedInUser } from "../../../redux/user/user.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  //! Улучшить, найти лучшее решение
  //! Редирект по умолчанию
  useEffect(() => {
    navigate("menu");
  }, []);


  const logoutClickHandler = (): void => {
    dispatch(invalidateLoggedInUser());
  };

  const navigateToMenuPage = (): void => {
    navigate("/dashboard/menu");
  };

  const navigateToMealPage = (): void => {
    navigate("/dashboard/meal");
  };

  const navigateToMainPage = (): void => {
    navigate("/");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["dashboard-container"]}>
        <div className={styles["nav-container"]}>
          <AtomicButtonComponent
            name="Блюда"
            clickFunction={navigateToMealPage}
          />
          <AtomicButtonComponent
            name="Меню"
            clickFunction={navigateToMenuPage}
          />
          <AtomicButtonComponent
            name="Главная страница"
            clickFunction={navigateToMainPage}
          />
          <p className={styles["logout-icon"]} onClick={logoutClickHandler}>
            Выйти <FontAwesomeIcon icon={faSignOutAlt} />
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
