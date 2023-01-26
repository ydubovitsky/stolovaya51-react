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
import {
  createNewMenuAsync
} from "../../../../../redux/menu/menu.slice";
import { useAppSelector } from "../../../../../redux/hooks";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";

interface MenuInterface {
  date?: Date;
  menuListEntities: MenuListEntityInterface;
}

interface MenuListEntityInterface {
  mealTime?: string | any;
  [x: string]: any;
}

interface MenuItemInterface {
  date?: Date;
  mealTime: string;
  mealItem?: MealItemInterface;
  cost?: number;
  portionSize?: number;
  description?: string;
}

const MenuSubpage: React.FC = () => {
  const dispatch = useDispatch();
  const mealsItemArray: MealItemInterface[] = useAppSelector(
    mealsItemArraySelector
  );

  //!TODO Улучшить это
  const [menuItem, setMenuItem] = useState<MenuItemInterface>({ mealTime: "" });
  const [menu, setMenu] = useState<MenuInterface>({ menuListEntities: {} });

  const addMenuListItemToMenuHandler = () => {
    const spreadMenuListEntitiesIfExists = (): MenuListEntityInterface => {
      if (menu.menuListEntities[menuItem.mealTime] != undefined) {
        return [...menu.menuListEntities[menuItem.mealTime], menuItem];
      } else {
        return [menuItem];
      }
    };

    setMenu({
      ...menu,
      date: menuItem.date,
      menuListEntities: {
        ...menu.menuListEntities,
        [menuItem.mealTime]: spreadMenuListEntitiesIfExists(),
      },
    });
  };

  const deleteMenuItemFromStateHandler = (
    mealTime: string,
    id: number | undefined
  ): void => {
    if (id !== undefined) {
      const mealTimeArray = menu.menuListEntities[mealTime].filter(
        (item: any) => item.mealItem.id !== id
      );
      setMenu({
        ...menu,
        date: menuItem.date,
        menuListEntities: {
          ...menu.menuListEntities,
          [mealTime]: [...mealTimeArray],
        },
      });
    }
  };

  const onMenuItemChangeHandler = (
    name: string,
    arg: MealItemInterface | Date | number | string
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
            onClick={() => onMenuItemChangeHandler("mealTime", mealTime)}
            value={mealTime}
          >
            {mealTime}
          </option>
        )
      )}
    </select>
  );

  console.log(menuItem);
  console.log(menu);

  const showMenuListElements = () =>
    Object.keys(menu.menuListEntities).map((mealTimeName) => (
      <div className={styles["menu-list-item"]}>
        <h1>{mealTimeName}</h1>
        {/* //!TODO Исправить, any -> неверный тип */}
        {menu.menuListEntities[mealTimeName].map((item: any) => (
          <div className={styles["meal-list-item"]}>
            <p>{item.mealItem !== undefined ? item.mealItem.name : ""}</p>
            <p>{item.cost} р.</p>
            <p>{item.weight} гр.</p>
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() =>
                deleteMenuItemFromStateHandler(mealTimeName, item.mealItem?.id)
              }
            />
          </div>
        ))}
      </div>
    ));

  return (
    <div className={styles["container"]}>
      <div className={styles["menu-list-container"]}>
        <h1>Меню</h1>
        <div className={styles["menu-list"]}>{showMenuListElements()}</div>
        <h3>
          Вы можете удалить или скорректировать любое блюдо из этого списка
        </h3>
        <AtomicButtonComponent
          name="Сохранить меню"
          clickFunction={() => dispatch(createNewMenuAsync(menu))}
        />
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
          name="cost"
          onChange={(e) => onMenuItemChangeHandler("cost", e.target.value)}
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
          clickFunction={addMenuListItemToMenuHandler}
        />
      </div>
    </div>
  );
};

export default MenuSubpage;
