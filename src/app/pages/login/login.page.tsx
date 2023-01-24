import styles from "./login.module.css";
const Fade = require("react-reveal/Fade");

const LoginPage: React.FC = () => {
  return (
    <div className={styles["container"]}>
        <label htmlFor="username">Введите имя пользователя</label>
        <input type="text" name="username" id="" placeholder="Администратор"/>
        <label htmlFor="password">Введите ваш пароль</label>
        <input type="password" name="password" id="" placeholder="123"/>
    </div>
  );
};

export default LoginPage;
