import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./login.module.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  UserInterface,
  login,
  userSelector,
} from "../../../redux/user/user.slice";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Fade = require("react-reveal/Fade");

const ROLES = ["ADMIN", "SUPER_ADMIN", "OWNER"];

/**
 * LoginPage component
 * @returns
 */
const LoginPage: React.FC = (): JSX.Element => {
  const { userEntity } = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<UserInterface>({});

  //TODO Вынести в верхний компонент? Напрмер как то в RequireAuthRoute
  // Если пользователь уже залогинен, то он не сможет это сделать повторно
  useEffect(() => {
    if (
      userEntity.role?.some((role) => ROLES.includes(role)) &&
      userEntity.token !== null
    )
      navigate("/dashboard");
  }, []);

  const navigateToDashboardPage = (): void => {
    navigate("/dashboard");
    dispatch(login(user));
  };

  const onLoginFormChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles["container"]}>
      <Fade>
        <div className={styles["login-form-container"]}>
          <label htmlFor="username">Введите имя пользователя</label>
          <input
            type="text"
            name="username"
            onChange={onLoginFormChangeHandler}
            placeholder="admin"
          />
          <label htmlFor="password">Введите ваш пароль</label>
          <input
            type="password"
            name="password"
            onChange={onLoginFormChangeHandler}
            placeholder="123"
          />
          <AtomicButtonComponent
            name="Войти"
            clickFunction={navigateToDashboardPage}
          />
        </div>
      </Fade>
    </div>
  );
};

export default LoginPage;
