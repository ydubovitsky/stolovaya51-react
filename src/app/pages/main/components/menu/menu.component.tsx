import styles from "./menu.module.css";
import BackgroundImageArray from "./images";
import TitleComponent from "../../../../common/atomic-components/title/title.component";
import { useEffect, useState } from "react";
const Fade = require("react-reveal/Fade");

interface MenuInterface {
  mealTimes: Array<{
    name: string;
    meals: MealInterface[];
  }>;
}

interface MealInterface {
  name: string;
  cost: number;
  weight: number;
}

const mondayMenu: MenuInterface = {
  mealTimes: [
    {
      name: "Завтрак",
      meals: [
        {
          name: "Суп",
          cost: 100,
          weight: 200,
        },
        {
          name: "Сырники",
          cost: 100,
          weight: 200,
        },
        {
          name: "Вареники",
          cost: 100,
          weight: 200,
        },
      ],
    },
    {
      name: "Ланч",
      meals: [
        {
          name: "Суп",
          cost: 100,
          weight: 200,
        },
        {
          name: "Сырники",
          cost: 100,
          weight: 200,
        },
        {
          name: "Вареники",
          cost: 100,
          weight: 200,
        },
      ],
    },
    {
      name: "Остальное",
      meals: [
        {
          name: "Суп",
          cost: 100,
          weight: 200,
        },
        {
          name: "Сырники",
          cost: 100,
          weight: 200,
        },
        {
          name: "Вареники",
          cost: 100,
          weight: 200,
        },
        {
          name: "Суп",
          cost: 100,
          weight: 200,
        },
        {
          name: "Сырники",
          cost: 100,
          weight: 200,
        },
        {
          name: "Вареники",
          cost: 100,
          weight: 200,
        },
      ],
    },
  ],
};

const MenuComponent: React.FC = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const showMenuByDayElements = () => {
    return mondayMenu.mealTimes.map((mealTime) => (
      <div className={styles["meal-time-container"]}>
        <h1>{mealTime.name}</h1>
        <div className={styles["meals-container"]}>
          {mealTime.meals.map((meal) => (
            <div className={styles["meal-item-detail"]}>
              <p>{meal.name}</p>
              <p>{meal.cost} р.</p>
              <p>{meal.weight} гр.</p>
            </div>
          ))}
        </div>
      </div>
    ));
  };

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
