import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import { UserInterface, login } from "../../../redux/user/user.slice";
import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./login.module.css";
import { Fade } from "react-awesome-reveal";

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

  const navigateToMainPage = (): void => {
    dispatch(login(user));
    navigate("/");
  };

  const onLoginFormChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["login-form-container"]}>
        <Fade>
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
          <div className={styles["buttons-container"]}>
            <AtomicButtonComponent
              name="Войти"
              clickFunction={navigateToDashboardPage}
            />
            <AtomicButtonComponent
              name="Назад"
              clickFunction={navigateToMainPage}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LoginPage;
