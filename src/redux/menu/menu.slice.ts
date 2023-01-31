import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";
import { CustomDateInterface } from "../../app/utils/date.util";
import { MenuInterface } from "../../app/pages/dashboard/subpages/menu/menu.subpage";
import { BACKEND_URL } from "../../services/constants";

// ------------------------------------ Types ------------------------------------

interface MenuStateInterface {
  menu: MenuInterface;
  status: string;
}

// ------------------------------------ AsyncThunk ------------------------------------

export const createNewMenuAsync = createAsyncThunk<
  MenuInterface,
  MenuInterface,
  { state: RootState }
>("menu/create", async (menu, { getState }) => {
  const state: RootState = getState();
  const token = state.user.userEntity.token;

  const responseData = await fetchData({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/menu`,
    data: menu,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  });
  return responseData;
});

export const getMenuByCustomDateAsync = createAsyncThunk<
  MenuInterface,
  CustomDateInterface
>("meal/get-by-custom-date", async (date: CustomDateInterface) => {
  const responseData = await fetchData({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/menu?day=${date.day}&month=${date.month}&year=${date.year}`,
    responseType: "json",
  });
  return responseData;
});

export const getMenuByDateAsync = createAsyncThunk<MenuInterface, Date>(
  "meal/get-by-date",
  async (date: Date) => {
    const responseData = await fetchData({
      method: "GET",
      //! date.toLocaleDateString() => 2023.01.05
      url: `${BACKEND_URL}/api/v1/menu?date=${date.toLocaleDateString()}`,
      responseType: "json",
    });
    return responseData;
  }
);

// ------------------------------------ InitState ------------------------------------

const initialState: MenuStateInterface = {
  menu: {
    menuEntities: [],
  },
  status: "idle",
};

// ------------------------------------ Slice ------------------------------------

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewMenuAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewMenuAsync.fulfilled, (state, action) => {
        state.status = "loaded";
      })
      .addCase(createNewMenuAsync.rejected, (state) => {
        state.status = "failed";
      })
      //!getMenuByCustomDateAsync
      .addCase(getMenuByCustomDateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMenuByCustomDateAsync.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.status = "loaded";
      })
      .addCase(getMenuByCustomDateAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const menuSelector = (state: RootState): MenuInterface =>
  state.menu.menu;

// ------------------------------------ Default import ------------------------------------

export default menuSlice.reducer;
