import styles from "./menu.module.css";
import BackgroundImageArray from "./images";
import TitleComponent from "../../../../common/atomic-components/title/title.component";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getMenuByCustomDateAsync } from "../../../../../redux/menu/menu.slice";
import { convertDateToCustomDate } from "../../../../utils/date.util";
import { useAppSelector } from "../../../../../redux/hooks";
import { menuSelector } from "../../../../../redux/menu/menu.slice";
import { MenuInterface } from "../../../dashboard/subpages/menu/menu.subpage";
const Fade = require("react-reveal/Fade");

/**
 * MenuComponent
 * @returns
 */
const MenuComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const menu: MenuInterface = useAppSelector(menuSelector);

  useEffect(() => {
    dispatch(getMenuByCustomDateAsync(convertDateToCustomDate(date)));
  }, [date]);

  const onDateInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  const showMenuByDayElements = (): JSX.Element => (
    <>
      {menu.menuEntities.map((entity) => (
        <div className={styles["meal-time-container"]}>
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

  return (
    <div className={styles["container"]}>
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
      <Fade cascade bottom>
        <div
          className={styles["menu-container"]}
          style={{
            backgroundImage: `url(${BackgroundImageArray[backgroundImageIndex]})`,
          }}
        >
          {showMenuByDayElements()}
        </div>
      </Fade>
    </div>
  );
};

export default MenuComponent;
