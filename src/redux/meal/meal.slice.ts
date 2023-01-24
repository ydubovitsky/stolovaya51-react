import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";

// ------------------------------------ Types ------------------------------------

export interface MealItemInterface {
  id?: number,
  name?: string;
  calories?: number;
  description?: string;
}

export interface MealStateInterface {
  mealsItemArray: MealItemInterface[];
  status: "idle" | "loading" | "loaded" | "failed";
}

const initialState: MealStateInterface = {
  mealsItemArray: [],
  status: "idle",
};

// ------------------------------------ AsyncThunk ------------------------------------

export const createNewMealAsync: any = createAsyncThunk(
  "meal/create",
  async (meal) => {
    const response = await fetchData({
      method: "POST",
      url: `http://localhost:8080/api/v1/meal`,
      data: meal,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

export const getAllMealsAsync: any = createAsyncThunk(
  "meal/get-all-meals",
  async (meal) => {
    const response = await fetchData({
      method: "GET",
      url: `http://localhost:8080/api/v1/meal/all`,
      responseType: "json",
    });
    const result = (await response) as any;
    return result;
  }
);

// ------------------------------------ Slice ------------------------------------

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewMealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewMealAsync.fulfilled, (state, action) => {
        state.status = "loaded";
      })
      .addCase(createNewMealAsync.rejected, (state) => {
        state.status = "failed";
      })
      //!getAllMealsAsync
      .addCase(getAllMealsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMealsAsync.fulfilled, (state, action) => {
        state.mealsItemArray = action.payload;
        state.status = "loaded";
      })
      .addCase(getAllMealsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const mealsItemArraySelector = (state: RootState) => state.meal.mealsItemArray;

// ------------------------------------ Default import ------------------------------------

export default mealSlice.reducer;
