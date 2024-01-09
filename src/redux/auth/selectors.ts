import { RootState } from "../store";

import { TUser } from "shared.types";

export const selectUser = (state: RootState): TUser => state.auth.user;
export const selectRefreshToken = (state: RootState): string | null => state.auth.refreshToken;
export const selectIdToken = (state: RootState): string | null => state.auth.idToken;
