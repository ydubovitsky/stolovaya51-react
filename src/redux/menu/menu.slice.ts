import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";

// ------------------------------------ Types ------------------------------------

// export interface MealItemInterface {
//   id?: number,
//   name?: string;
//   calories?: number;
//   description?: string;
// }

// export interface MealStateInterface {
//   mealsItemArray: MealItemInterface[];
//   status: "idle" | "loading" | "loaded" | "failed";
// }

const initialState: any = {
  menuItemArray: [],
  status: "idle",
};

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

// export const getAllMealsAsync: any = createAsyncThunk(
//   "meal/get-all-meals",
//   async (meal) => {
//     const response = await fetchData({
//       method: "GET",
//       url: `http://localhost:8080/api/v1/meal/all`,
//       responseType: "json",
//     });
//     const result = (await response) as any;
//     return result;
//   }
// );

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
      //!getAllMealsAsync
      // .addCase(getAllMealsAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(getAllMealsAsync.fulfilled, (state, action) => {
      //   state.mealsItemArray = action.payload;
      //   state.status = "loaded";
      // })
      // .addCase(getAllMealsAsync.rejected, (state) => {
      //   state.status = "failed";
      // });
  },
});

// ------------------------------------ Selectors ------------------------------------

// export const mealsItemArraySelector = (state: RootState) => state.meal.mealsItemArray;

// ------------------------------------ Default import ------------------------------------

export default menuSlice.reducer;
