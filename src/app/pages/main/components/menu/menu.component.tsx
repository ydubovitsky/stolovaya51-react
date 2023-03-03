import styles from "./menu.module.css";
import BackgroundImageArray from "./images";
import TitleComponent from "../../../../common/atomic-components/title/title.component";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { getMenuByDateAsync } from "../../../../../redux/menu/menu.slice";
import { useAppSelector } from "../../../../../redux/hooks";
import { menuSelector } from "../../../../../redux/menu/menu.slice";
import { MenuInterface } from "../../../dashboard/subpages/menu/menu.subpage";
import { ReactComponent as LunchSvg } from "./svg/lunch-svgrepo-com.svg";
import { Fade } from "react-awesome-reveal";

/**
 * MenuComponent
 * @returns
 */
const MenuComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [date, setDate] = useState(new Date());
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const menu: MenuInterface = useAppSelector(menuSelector);

  useEffect(() => {
    dispatch(getMenuByDateAsync(date));
  }, [date]);

  const onDateInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  const showMenuByDayElements = (): JSX.Element => {
    if (menu.menuEntities == undefined || menu.menuEntities.length === 0) {
      return (
        <div className={styles["meal-time-container"]}>
          <LunchSvg />
          <h1 style={{ textAlign: "center", textDecoration: "none" }}>
            Мы не успели заполнить меню на этот день
          </h1>
          <h3 style={{ textAlign: "center", textDecoration: "none" }}>
            ...но не расстраивайтесь, мы это скоро исправим, заходите позже
          </h3>
        </div>
      );
    } else {
      return (
        <>
          {menu.menuEntities?.map((entity) => (
            <div className={styles["meal-time-container"]} key={entity.name}>
              <h1>{entity.name}</h1>
              <div className={styles["meals-container"]}>
                {entity.menuItems.map((menuItem) => (
                  <div className={styles["meal-item-detail"]}>
                    <p>{menuItem.mealItem?.name}</p>
                    <p>{menuItem.cost}</p>
                    <p>{menuItem.portion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className={styles["container"]} id="menu-container">
      <div className={styles["container-title"]}>
        <TitleComponent name="Меню на" />
        <input
          type="date"
          name="date"
          onChange={(e) => onDateInputChangeHandler(e)}
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <TitleComponent name="число" />
      </div>
      <div
        className={styles["menu-container"]}
        style={{
          backgroundImage: `url(${BackgroundImageArray[backgroundImageIndex]})`,
        }}
      >
        {showMenuByDayElements()}
      </div>
    </div>
  );
};

export default MenuComponent;
