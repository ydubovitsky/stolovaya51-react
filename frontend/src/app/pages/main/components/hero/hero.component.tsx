import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./hero.module.css";
import image from "./images/irene-kredenets-6unxGRCPg0U-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Fade = require("react-reveal/Fade");

const HeroComponent: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLoginPage = (): void => {
    navigate("/login");
  };

  return (
    <div className={styles["container"]}>
      <FontAwesomeIcon
        onClick={navigateToLoginPage}
        icon={faRightToBracket}
        className={styles["login-icon"]}
      />
      <div className={styles["left-column"]}>
        <Fade left>
          <h1>Столова51</h1>
          <h2>в НИИ ТП</h2>
          <h3>Приглашаем всех на вкусные завтраки, обеды и не только...</h3>
          <h4>...а так же вы можете забрать еду с собой</h4>
          <AtomicButtonComponent name="Посмотреть меню" />
          <h3>Работаем с понедельника по пятницу с 7.30 до 15.30</h3>
        </Fade>
      </div>
      <Fade>
        <img src={image} alt="" className={styles["right-column"]} />
      </Fade>
    </div>
  );
};

export default HeroComponent;
