import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
const Fade = require("react-reveal/Fade");

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const navigateToDashboardPage = (): void => {
    navigate("/dashboard");
  }

  return (
    <div className={styles["container"]}>
      <Fade>
        <div className={styles["login-form-container"]}>
          <label htmlFor="username">Введите имя пользователя</label>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Администратор"
          />
          <label htmlFor="password">Введите ваш пароль</label>
          <input type="password" name="password" id="" placeholder="123" />
          <AtomicButtonComponent name="Войти" clickFunction={navigateToDashboardPage}/>
        </div>
      </Fade>
    </div>
  );
};

export default LoginPage;
