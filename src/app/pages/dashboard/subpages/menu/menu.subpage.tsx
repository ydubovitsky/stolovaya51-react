import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  MealItemInterface,
  createNewMealAsync,
  getAllMealsAsync,
  mealsItemArraySelector,
} from "../../../../../redux/meal/meal.slice";
import { useAppSelector } from "../../../../../redux/hooks";
import { useState } from "react";

interface MealTimeInterface {
  name: string | undefined;
}

interface MenuItemInterface {
  date: Date;
  mealTime: MealTimeInterface | undefined;
  mealItem: MealItemInterface | undefined;
  cost: number | undefined;
  portionSize: number | undefined;
  description: string | undefined;
}

const MenuSubpage: React.FC = () => {
  const mealsItemArray: MealItemInterface[] = useAppSelector(
    mealsItemArraySelector
  );

  //!TODO Улучшить это
  const [menuItem, setMenuItem] = useState<object | any>();

  const onMenuItemChangeHandler = (
    name: string,
    arg: MealTimeInterface | MealItemInterface | Date | number | string
  ): void => {
    setMenuItem({
      ...menuItem,
      [name]: arg,
    });
  };

  const showMealItemSelectElement = () => (
    <select multiple size={10} name="mealId">
      <option disabled>Выберите название блюда из списка</option>
      {mealsItemArray.map((mealItem) => (
        <option
          onClick={() => onMenuItemChangeHandler("mealItem", mealItem)}
          value={mealItem.id}
        >
          {mealItem.name}
        </option>
      ))}
    </select>
  );

  const showMealTimeSelectElement = () => (
    <select multiple name="mealTime">
      <option disabled>Выберите время подачи из списка</option>
      {Array.of("Завтрак", "Ланч", "Напитки", "Полуфабрикаты", "Остальное").map(
        (mealTime) => (
          <option
            onClick={() =>
              onMenuItemChangeHandler("mealTime", {
                name: mealTime,
              } as MealTimeInterface)
            }
            value={mealTime}
          >
            {mealTime}
          </option>
        )
      )}
    </select>
  );

  console.log(menuItem);

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
        <input
          type="date"
          name="date"
          id=""
          placeholder="500"
          onChange={(e) =>
            onMenuItemChangeHandler("date", new Date(e.timeStamp))
          }
        />

        <label htmlFor="mealTime">Время подачи</label>
        {showMealTimeSelectElement()}

        <label htmlFor="name">Название блюда</label>
        {showMealItemSelectElement()}

        <label htmlFor="cost">Цена в рублях</label>
        <input
          type="number"
          name="calories"
          onChange={(e) => onMenuItemChangeHandler("calories", e.target.value)}
          placeholder="500"
        />

        <label htmlFor="weight">Размер порции в граммах</label>
        <input
          type="number"
          name="weight"
          onChange={(e) => onMenuItemChangeHandler("weight", e.target.value)}
          placeholder="500"
        />

        <label htmlFor="description">Краткое описание</label>
        <textarea
          name="description"
          onChange={(e) =>
            onMenuItemChangeHandler("description", e.target.value)
          }
          placeholder="Суп из свежих белых грибов со сметаной"
        ></textarea>
        <AtomicButtonComponent
          name="Добавить новое блюдо"
        />
      </div>
    </div>
  );
};

export default MenuSubpage;
