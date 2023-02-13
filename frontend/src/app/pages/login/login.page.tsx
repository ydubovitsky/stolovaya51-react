import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import {
  UserInterface,
  login
} from "../../../redux/user/user.slice";
import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./login.module.css";
const Fade = require("react-reveal/Fade");

/**
 * LoginPage component
 * @returns
 */
const LoginPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<UserInterface>({});

  const navigateToDashboardPage = (): void => {
    dispatch(login(user));
    navigate("/dashboard");
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
