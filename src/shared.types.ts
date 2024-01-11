import { TTheme } from "styles";

export type TStylesProps = {
  theme?: TTheme;
};

export type TReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type TTeacher = {
  id: number;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: TReview[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
};

export type TUser = {
  displayName: string | null;
  email: string | null;
};
