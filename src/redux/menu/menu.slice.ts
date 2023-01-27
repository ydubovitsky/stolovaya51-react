import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";
import { CustomDateInterface } from "../../app/utils/date.util";
import { MenuInterface } from "../../app/pages/dashboard/subpages/menu/menu.subpage";

// ------------------------------------ Types ------------------------------------

interface MenuStateInterface {
  menuArray: MenuInterface[];
  status: string;
}

// ------------------------------------ AsyncThunk ------------------------------------

export const createNewMenuAsync: any = createAsyncThunk(
  "menu/create",
  async (menu) => {
    const response = await fetchData({
      method: "POST",
      url: `http://localhost:8080/api/v1/menu`,
      data: menu,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

export const getMenuByCustomDateAsync: any = createAsyncThunk(
  "meal/get-by-custom-date",
  async (date: CustomDateInterface) => {
    const response = await fetchData({
      method: "GET",
      url: `http://localhost:8080/api/v1/menu?day=${date.day}&month=${date.month}&year=${date.year}`,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

export const getMenuByDateAsync: any = createAsyncThunk(
  "meal/get-by-date",
  async (date: Date) => {
    const response = await fetchData({
      method: "GET",
      //! date.toLocaleDateString() => 2023.01.05
      url: `http://localhost:8080/api/v1/menu?date=${date.toLocaleDateString()}`,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

// ------------------------------------ InitState ------------------------------------

const initialState: MenuStateInterface = {
  menuArray: [],
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
        state.menuArray = action.payload;
        state.status = "loaded";
      })
      .addCase(getMenuByCustomDateAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const menuArraySelector = (state: RootState) : MenuInterface[] => state.menu.menuArray;

// ------------------------------------ Default import ------------------------------------

export default menuSlice.reducer;
