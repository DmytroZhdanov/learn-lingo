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
      state.favorite = state.favorite.filter(car => car.id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
