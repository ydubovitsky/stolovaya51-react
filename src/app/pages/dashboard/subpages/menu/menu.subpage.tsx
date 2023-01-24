import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MenuSubpage: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["menu-list-container"]}>
        <h1>Меню</h1>
        <div className={styles["menu-list"]}>
          <div className={styles["menu-list-item"]}>
            <h1>Завтрак</h1>
            <div className={styles["meal-list-item"]}>
              <p>Суп </p>
              <FontAwesomeIcon icon={faEdit} />
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div className={styles["meal-list-item"]}>
              <p>Жаркое с грибами </p>
              <FontAwesomeIcon icon={faEdit} />
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <h1>Обед</h1>
            <div className={styles["meal-list-item"]}>
              <p>Суп </p>
              <FontAwesomeIcon icon={faEdit} />
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
        <h3>
          Вы можете удалить или скорректировать любое блюдо из этого списка
        </h3>
      </div>
      <div className={styles["create-new-daily-menu-form"]}>
        <label htmlFor="date">На какое число составляем меню?</label>
        <input type="date" name="date" id="" placeholder="500" />

        <label htmlFor="category">Время подачи</label>
        <select multiple name="category[]">
          <option disabled>Выберите время из списка</option>
          <option value="Чебурашка">Завтрак</option>
          <option value="Шапокляк">Бизнес-Ланч</option>
          <option value="Крыса Лариса">Остальное</option>
        </select>

        <label htmlFor="name">Название блюда</label>
        <select multiple name="name[]">
          <option disabled>Выберите название блюда из списка</option>
          <option value="Чебурашка">Чебурашка</option>
          <option selected value="Крокодил Гена">
            Крокодил Гена
          </option>
          <option value="Шапокляк">Шапокляк</option>
          <option value="Крыса Лариса">Крыса Лариса</option>
        </select>

        <label htmlFor="cost">Цена в рублях</label>
        <input type="number" name="calories" id="" placeholder="500" />

        <label htmlFor="weight">Размер порции в граммах</label>
        <input type="number" name="weight" id="" placeholder="500" />

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

export default MenuSubpage;
