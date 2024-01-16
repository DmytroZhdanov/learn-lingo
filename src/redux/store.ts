import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoriteReducer } from "./favorite/favoriteSlice";
import { api } from "./api";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["refreshToken"],
};

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: persistReducer<ReturnType<typeof authReducer>>(authPersistConfig, authReducer),
    favorite: persistReducer<ReturnType<typeof favoriteReducer>>(
      favoritePersistConfig,
      favoriteReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
