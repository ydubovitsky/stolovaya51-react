import { UserStateInterface } from "../redux/user/user.slice";

export const loadState = (stateName: string) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Can`t load state', err)
    return undefined;
  }
};

export const saveState = (stateName: string, state: UserStateInterface) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    console.error('Can`t save state', err)
    return undefined;
  }
};