import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { RootState } from "../store";
import { BACKEND_URL } from "../../services/constants";
import { MenuInterface } from "../../app/pages/dashboard/subpages/menu/menu.subpage";

// ------------------------------------ Types ------------------------------------

export interface MealItemInterface {
  id?: number;
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

export const createNewMealAsync: any = createAsyncThunk<
  MealItemInterface,
  MealItemInterface,
  { state: RootState }
>("meal/create", async (meal, { getState }) => {
  const state: RootState = getState();
  const token = state.user.userEntity.token;

  const responseData = await fetchData({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/meal`,
    data: meal,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    responseType: "json",
  });
  return responseData;
});

export const getAllMealsAsync = createAsyncThunk<MealItemInterface[]>(
  "meal/get-all-meals",
  async () => {
    const responseData = await fetchData({
      method: "GET",
      url: `${BACKEND_URL}/api/v1/meal/all`,
      responseType: "json",
    });
    return responseData;
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

export const mealsItemArraySelector = (state: RootState) =>
  state.meal.mealsItemArray;

// ------------------------------------ Default import ------------------------------------

export default mealSlice.reducer;
