import { showPopup } from '../features/popup/popup-slice';

const POPUP_PROPERTIES = {
  loginRejected: {
    message: "LOGIN ERROR",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  loginFulfilled: {
    message: "You are successfully login",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  logout: {
    message: "You are logged out from your account",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  themeCreateFulfilled: {
    message: "Theme successfully created",
    styles: {
      color: "white",
      backgroundColor: "#01C9F7"
    }
  },
  taskAddFulfilled: {
    message: "New task successfully added",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateUserDataUpdated: {
    message: "User data successfully updated",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationFulfilled: {
    message: "Congratulation! You have registered successfully yet. Now, you can come in!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  authRegistrationRejected: {
    message: "Sorry, this username already exists",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  updateUserDataRejected: {
    message: "User data updating error",
    styles: {
      color: "white",
      backgroundColor: "red"
    }
  },
  setFavoriteFulfilled: {
    message: "Favorite!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  },
  updateCardSetFulfilled: {
    message: "Cardset updated!",
    styles: {
      color: "white",
      backgroundColor: "#4BE066"
    }
  }
}

const PopupMiddleware = ({ dispatch, getState }) => next => action => {
  const { type } = action;

  switch (type) {
    // ---------------------------- AUTH ----------------------------
    case 'auth/login/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.loginRejected));
      break;
    }
    case 'auth/login/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.loginFulfilled));
      break;
    }
    case 'auth/logout': {
      dispatch(showPopup(POPUP_PROPERTIES.logout));
      break;
    }
    case 'auth/updateUserData/updated': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataUpdated));
      break;
    }
    case 'auth/updateUserData/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.updateUserDataRejected));
      break;
    }
    case 'auth/register/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationFulfilled));
      break;
    }
    case 'auth/register/rejected': {
      dispatch(showPopup(POPUP_PROPERTIES.authRegistrationRejected));
      break;
    }
    // ---------------------------- Theme ----------------------------
    case 'theme/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.themeCreateFulfilled));
      break;
    }
    // ---------------------------- TASK ----------------------------
    case 'task/add/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.taskAddFulfilled));
      break;
    }
    case 'card/setFavorite/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.setFavoriteFulfilled));
      break;
    }
    case 'card/update/fulfilled': {
      dispatch(showPopup(POPUP_PROPERTIES.updateCardSetFulfilled));
      break;
    }
    default: break;
  }
  next(action);
}

export default PopupMiddleware;