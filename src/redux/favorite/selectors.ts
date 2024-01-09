import { RootState } from "../store";

import { TTeacher } from "shared.types";

export const selectFavorites = (state: RootState): TTeacher[] => state.favorite.favorite;
