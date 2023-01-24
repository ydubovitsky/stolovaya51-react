import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./meal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MealSubpage: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["meal-list-container"]}>
        <h1>Список уже существующих блюд</h1>
        <div className={styles["meal-list"]}>
          <div className={styles["meal-list-item"]}>
            <p>Суп </p>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
          <div className={styles["meal-list-item"]}>
            <p>Суп – жидкое блюдо, первое блюдо. Многие разновидности супов получили самостоятельные наименования </p>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
        <h3>
          Вы можете удалить или скорректировать любое блюдо из этого списка
        </h3>
      </div>
      <div className={styles["create-new-meal-form"]}>
        <label htmlFor="name">Название блюда</label>
        <input type="text" name="name" id="" placeholder="Суп грибной" />

        <label htmlFor="calories">Калорийность</label>
        <input type="number" name="calories" id="" placeholder="500" />

        <label htmlFor="description">Краткое описание</label>
        <textarea
          name="description"
          placeholder="Суп из свежих белых грибов со сметаной"
        ></textarea>
        <AtomicButtonComponent name="Добавить новое блюдо" />
      </div>
    </div>
  );
};

export default MealSubpage;
