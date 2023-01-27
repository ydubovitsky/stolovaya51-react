import styles from "./menu.module.css";
import BackgroundImageArray from "./images";
import TitleComponent from "../../../../common/atomic-components/title/title.component";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMenuByCustomDateAsync } from "../../../../../redux/menu/menu.slice";
import { convertDateToCustomDate } from "../../../../utils/date.util";
import { useAppSelector } from "../../../../../redux/hooks";
import { menuArraySelector } from "../../../../../redux/menu/menu.slice";
import { MenuInterface } from "../../../dashboard/subpages/menu/menu.subpage";
const Fade = require("react-reveal/Fade");

/**
 * MenuComponent
 * @returns
 */
const MenuComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const menu: MenuInterface[] = useAppSelector(menuArraySelector);

  useEffect(() => {
    dispatch(getMenuByCustomDateAsync(convertDateToCustomDate(new Date())));
  }, []);

  const showMenuByDayElements = (): JSX.Element => (
    <div>
      {menu[0]?.menuEntities.map((entity) => (
        <div className={styles["meal-time-container"]}>
          {entity.name}
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
    </div>
  );

  const calculateCurrentDate = (): string =>
    "Меню на " + new Date().toLocaleString().split(",")[0];

  return (
    <div className={styles["container"]}>
      <div className={styles["container-title"]}>
        <TitleComponent name={calculateCurrentDate()} />
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
