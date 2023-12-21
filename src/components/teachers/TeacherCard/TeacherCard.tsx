import Button from "components/common/Button";
import Icon from "components/common/Icon";
import { FC, ReactElement } from "react";
import LanguageLevel from "../LanguageLevel";
import Review from "../Review";

type TReview = {
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

          <p>
            <Icon iconId="book" />
            Lessons online
          </p>

          <p>Lessons done: {teacher.lessons_done}</p>

          <p>
            <Icon iconId="rating" />
            Rating: {teacher.rating}
          </p>

          <p>Price / 1 hour: {teacher.price_per_hour}$</p>
        </div>

        <div>
          <p>
            <span>Speaks: </span>
            <span>{teacher.languages.join(", ")}</span>
          </p>

          <p>
            <span>Lesson Info: </span>
            <span>{teacher.lesson_info}</span>
          </p>

          <p>
            <span>Conditions: </span>
            <span>{teacher.conditions.join(" ")}</span>
          </p>
        </div>

        <button type="button">Read more</button>

        <p>{teacher.experience}</p>

        <ul>
          {teacher.reviews.map(
            (review: TReview): ReactElement => (
              <Review />
            )
          )}
        </ul>

        <ul>
          <LanguageLevel content={"A1 Beginner"} selected={false} />
        </ul>

        <Button padding="16px 48px">Book trial lesson</Button>
      </div>
    </li>
  );
};

export default TeacherCard;
