import { FC, ReactElement } from "react";

import Button from "components/common/Button";
import LanguageLevels from "../LanguageLevels";
import Reviews from "../Reviews";
import TeacherInfoPanel from "../TeacherInfoPanel";
import TeacherStatsPanel from "../TeacherStatsPanel";

export type TReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type TTeacherCardProps = {
  teacher: {
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
};

const TeacherCard: FC<TTeacherCardProps> = ({ teacher }): ReactElement => {
  return (
    <li>
      <img src={teacher.avatar_url} alt="Teacher's Avatar" />

      <div>
        <div>
          <h2>
            {teacher.name} {teacher.surname}
          </h2>

          <TeacherStatsPanel
            lessons_done={teacher.lessons_done}
            rating={teacher.rating}
            price_per_hour={teacher.price_per_hour}
          />
        </div>

        <TeacherInfoPanel
          languages={teacher.languages}
          lesson_info={teacher.lesson_info}
          conditions={teacher.conditions}
        />

        <button type="button">Read more</button>
        <p>{teacher.experience}</p>

        <Reviews reviews={teacher.reviews} />

        <LanguageLevels levels={teacher.levels} />

        <Button type="button" padding="16px 48px">
          Book trial lesson
        </Button>
      </div>
    </li>
  );
};

export default TeacherCard;
