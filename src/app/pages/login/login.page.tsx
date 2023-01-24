import AtomicButtonComponent from "../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./login.module.css";
const Fade = require("react-reveal/Fade");

const LoginPage: React.FC = () => {
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
          <AtomicButtonComponent name="Войти" />
        </div>
      </Fade>
    </div>
  );
};

export default LoginPage;
