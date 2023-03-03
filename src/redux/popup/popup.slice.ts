import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// -------------------------------------- Slice --------------------------------------

const initialState = {
  popupEntity: {
    message: null,
    styles: {},
    color: null,
  },
  isVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.popupEntity = action.payload;
      state.isVisible = true;
    },
    hidePopup: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const popupStateSelector = (state: RootState) => state.popup;
export const isVisibleSelector = (state: RootState) => state.popup.isVisible;
