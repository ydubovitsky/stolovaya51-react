import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MealMiddleware from './middleware/meal.middleware';
import mealReducer from './meal/meal.slice';

export const store = configureStore({
  reducer: {
    meal: mealReducer
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
