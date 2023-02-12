import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MealMiddleware from './middleware/meal.middleware';
import LoggingMiddleware from './middleware/logging.middleware';
import { loadState, saveState } from '../services/local-storage.service';
import mealReducer from './meal/meal.slice';
import menuReducer from './menu/menu.slice';
import userReducer from "./user/user.slice"

const persistedState = loadState('user');

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    menu: menuReducer,
    user: userReducer
  },
  preloadedState: {
    user: persistedState
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(MealMiddleware).concat(LoggingMiddleware)
});

//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save user state
store.subscribe(() => {
  saveState('user', store.getState().user);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
