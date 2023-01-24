import { getAllMealsAsync } from "../meal/meal.slice";

const MealMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    case 'meal/create/fulfilled': {
      dispatch(getAllMealsAsync());
      break;
    }
    default: break;
  }
  next(action);
}

export default MealMiddleware;