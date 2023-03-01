import AtomicButtonComponent from "../../../../common/atomic-components/atomic-button/atomic-button.component";
import styles from "./meal.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch } from "react-redux";
import {
  MealItemInterface,
  createNewMealAsync,
  getAllMealsAsync,
  mealsItemArraySelector,
} from "../../../../../redux/meal/meal.slice";
import { useAppSelector } from "../../../../../redux/hooks";

const MealSubpage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [meal, setMeal] = useState<MealItemInterface>();
  const mealsItemArray: MealItemInterface[] = useAppSelector(mealsItemArraySelector);

  useEffect((): void => {
    if (mealsItemArray.length === 0) {
      dispatch(getAllMealsAsync());
    }
  }, []);

  /**
   * Set data for meal object when user input data into input component
   * @param e
   */
  const onChangeMealDataHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value,
    });
  };

  const createNewMealHandler = (): void => {
    dispatch(createNewMealAsync(meal));
  };

  //!TODO Упростить
  const showMealListElements = (): JSX.Element | JSX.Element[] => {
    if (mealsItemArray.length === 0) {
      return <h3>Тут пока нет еды :(</h3>;
    } else {
      return mealsItemArray.map((mealItem) => (
        <div className={styles["meal-list-item"]} key={mealItem.id}>
          <p>{mealItem.name}</p>
          <FontAwesomeIcon icon={faEdit} />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ));
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["meal-list-container"]}>
        <h1>Список уже существующих блюд</h1>
        <div className={styles["meal-list"]}>{showMealListElements()}</div>
        <h3>
          Вы можете удалить или скорректировать любое блюдо из этого списка
        </h3>
      </div>
      <div className={styles["create-new-meal-form"]}>
        <label htmlFor="name">Название блюда</label>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Суп грибной"
          onChange={onChangeMealDataHandler}
        />

        <label htmlFor="calories">Калорийность</label>
        <input
          type="number"
          name="calories"
          id=""
          placeholder="500"
          min={0}
          max={5000}
          onChange={onChangeMealDataHandler}
        />

        <label htmlFor="description">Краткое описание</label>
        <textarea
          name="description"
          placeholder="Суп из свежих белых грибов со сметаной"
          onChange={onChangeMealDataHandler}
        ></textarea>
        <AtomicButtonComponent
          name="Добавить новое блюдо"
          clickFunction={createNewMealHandler}
        />
      </div>
    </div>
  );
};

export default MealSubpage;
