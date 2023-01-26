import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MealMiddleware from './middleware/meal.middleware';
import mealReducer from './meal/meal.slice';
import menuReducer from './menu/menu.slice';

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    menu: menuReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(MealMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
