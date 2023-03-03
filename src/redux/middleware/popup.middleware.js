import { showPopup } from "../popup/popup.slice";

//TODO Переписать на typescript

const POPUP_PROPERTIES = {
  loginRejected: {
    message: "Вы указали неправильные данные для входа",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  loginFulfilled: {
    message: "Добро пожаловать!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  logout: {
    message: "Вы вышли из вашей учетной записи",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  mealCreateFulfilled: {
    message: "Блюдо успешно создано",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  mealDeleteFulfilled: {
    message: "Блюдо успешно удалено",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  menuCreateFulfilled: {
    message: "Меню на день успешно создано",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  menuCreateRejected: {
    message: "При создании меню, что-то пошло не так, повторите попытку",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
}

const PopupMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    // ---------------------------- AUTH ----------------------------
    case 'user/login/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.loginRejected));
      break;
    }
    case 'user/login/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.loginFulfilled));
      break;
    }
    case 'user/invalidateLoggedInUser': {
      dispatch(showPopup(POPUP_PROPERTIES.logout));
      break;
    }
    // ---------------------------- Meal ----------------------------
    case 'meal/create/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.mealCreateFulfilled));
      break;
    }
    case 'meal/delete/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.mealDeleteFulfilled));
      break;
    }
    // ---------------------------- Menu ----------------------------
    case 'menu/create/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.menuCreateFulfilled));
      break;
    }
    case 'menu/create/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.menuCreateRejected));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;