import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api-call.service";
import { BACKEND_URL } from "../../services/constants";
import { RootState } from "../store";

// ------------------------------------ Types ------------------------------------

export interface UserInterface {
  username?: string;
  password?: string;
  password2?: string;
  role?: string[];
  email?: string;
  token?: string;
}

export interface UserStateInterface {
  userEntity: UserInterface;
  status: "idle" | "loading" | "failed" | "register" | "login" | "updated";
  error?: string;
}

// -------------------------------------- AsyncThunk --------------------------------------

export const registration = createAsyncThunk<UserInterface, UserInterface>(
  "auth/registration",
  async (data) => {
    const payload = {
      method: "POST",
      url: `${BACKEND_URL}/api/v1/user/registration`,
      data,
    };
    const responseDate = await fetchData(payload);
    return responseDate;
  }
);

export const login = createAsyncThunk<UserInterface, UserInterface>(
  "auth/login",
  async (user) => {
    const payload = {
      method: "POST",
      url: `${BACKEND_URL}/login`,
      data: user,
    };
    const responseDate = await fetchData(payload);
    return responseDate;
  }
);

export const updateUserData: any = createAsyncThunk<
  UserInterface,
  UserInterface,
  { state: RootState }
>("auth/updateUserData", async (user, { getState }) => {
  const state: RootState = getState();
  const token = state.user.userEntity.token;
  const payload = {
    method: "PUT",
    url: `${BACKEND_URL}/api/v1/user/updateUserData`,
    data: {
      ...user,
      username: state.user.userEntity.username,
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  };
  const responseDate = await fetchData(payload);
  return responseDate;
});

// -------------------------------------- Slice --------------------------------------

const initialState: UserStateInterface = {
  userEntity: {},
  status: "idle",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    invalidateLoggedInUser: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      //! Registration
      .addCase(registration.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.status = "register";
      })
      .addCase(registration.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //! Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "login";
        state.userEntity = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //! Update user data
      .addCase(updateUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "updated";
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { invalidateLoggedInUser } = userSlice.actions;
export default userSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const userSelector = (state: RootState): UserStateInterface =>
  state.user;

export const userEntitySelector = (state: RootState): UserInterface =>
  state.user.userEntity;
