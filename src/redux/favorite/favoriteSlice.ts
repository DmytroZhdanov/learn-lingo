import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TTeacher } from "shared.types";

type TState = {
  favorite: TTeacher[];
};

export const initialState: TState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<TTeacher>) => {
      state.favorite.push(payload);
    },
    removeFromFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(teacher => teacher.id !== payload);
    },
    clearFavorite: state => {
      state.favorite = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
