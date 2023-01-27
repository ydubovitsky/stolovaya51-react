import produce from "immer";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../redux/hooks";
import {
  MealItemInterface,
  mealsItemArraySelector,
} from "../../../../../redux/meal/meal.slice";
import { createNewMenuAsync } from "../../../../../redux/menu/menu.slice";
import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./menu.module.css";
export interface MenuInterface {
  date?: Date;
  menuEntities: MenuEntityInterface[];
}

export interface MenuEntityInterface {
  name: string;
  menuItems: MenuItemInterface[];
}

export interface MenuItemInterface {
  date?: Date;
  mealTime?: string;
  mealItem?: MealItemInterface;
  cost?: number;
  portion?: string;
  description?: string;
}

//! Init state for menu component
const menuInitState: MenuInterface = {
  menuEntities: [
    {
      name: "Завтрак",
      menuItems: [],
    },
  ],
};

/**
 * MenuSabpage component!
 * @returns 
 */
const MenuSubpage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const mealsItemArray: MealItemInterface[] = useAppSelector(
    mealsItemArraySelector
  );

  //!TODO Улучшить это
  const [menuItem, setMenuItem] = useState<MenuItemInterface>({ mealTime: "" });
  //!TODO Избавиться от menuInitState
  const [menu, setMenu] = useState<MenuInterface>(menuInitState);

  const addMenuListItemToMenuHandler = (): void => {
    setMenu(
      produce((draft) => {
        draft.date = menuItem.date;
        const idx: number = draft.menuEntities.findIndex(
          (entity) => entity.name === menuItem.mealTime
        );
        if (idx > -1 && menuItem.mealItem !== undefined) {
          draft.menuEntities[idx].menuItems.push({
            cost: menuItem.cost,
            portion: menuItem.portion,
            mealItem: menuItem.mealItem,
          });
        }
        if (idx === -1 && menuItem.mealTime !== undefined) {
          draft.menuEntities.push({
            name: menuItem.mealTime,
            menuItems: [
              {
                cost: menuItem.cost,
                portion: menuItem.portion,
                mealItem: menuItem.mealItem,
              },
            ],
          });
        }
      })
    );
  };

  const deleteMenuItemFromStateHandler = (
    mealTime: string,
    menuItemIdx: number
  ): void => {
    setMenu(
      produce((draft) => {
        draft.menuEntities
          .filter((entity) => entity.name === mealTime)[0]
          .menuItems.splice(menuItemIdx, 1);
      })
    );
  };

  const onMenuItemChangeHandler = (
    name: string,
    arg: MealItemInterface | Date | string | number
  ): void => {
    setMenuItem({
      ...menuItem,
      [name]: arg,
    });
  };

  const showMealItemSelectElement = (): JSX.Element => (
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

  const showMealTimeSelectElement = (): JSX.Element => (
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

  const showMenuListContainerElement = (): JSX.Element => {
    const showCurrentDate = (): JSX.Element => (
      <h1>
        Меню на{" "}
        {menu.date !== undefined
          ? menu.date.toLocaleString().split(",")[0]
          : ""}
      </h1>
    );

    return (
      <>
        {showCurrentDate()}
        <div className={styles["menu-list"]}>
          {menu.menuEntities.map((entity) => (
            <div className={styles["menu-list-item"]}>
              <h1>{entity.name}</h1>
              {entity.menuItems.map((menuItem, idx) => (
                <div className={styles["meal-list-item"]}>
                  <p>{menuItem.mealItem?.name}</p>
                  <p>{menuItem.cost} р.</p>
                  <p>{menuItem.portion}</p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() =>
                      deleteMenuItemFromStateHandler(entity.name, idx)
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <h3>
          Вы можете удалить или скорректировать любое блюдо из этого списка
        </h3>
        <AtomicButtonComponent
          name="Сохранить меню"
          clickFunction={() => dispatch(createNewMenuAsync(menu))}
        />
      </>
    );
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["menu-list-container"]}>
        {showMenuListContainerElement()}
      </div>
      <div className={styles["create-new-daily-menu-form"]}>
        <label htmlFor="date">На какое число составляем меню?</label>
        <input
          type="date"
          name="date"
          onChange={(e) =>
            onMenuItemChangeHandler("date", new Date(e.target.value))
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

        <label htmlFor="portion">Размер порции в граммах</label>
        <input
          type="string"
          name="portion"
          onChange={(e) => onMenuItemChangeHandler("portion", e.target.value)}
          placeholder="500 гр."
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
