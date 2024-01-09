import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "shared.types";

export type TState = {
  user: TUser;
  idToken: string | null;
  refreshToken: string | null;
};

export const initialState: TState = {
  user: {
    displayName: null,
    email: null,
  },
  idToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, idToken, refreshToken } }: PayloadAction<TState>
    ) => {
      state.user = user;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
