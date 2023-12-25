import { FC, ReactElement } from "react";

import Icon from "components/common/Icon";
import Button from "components/common/Button";
import LanguageLevels from "../LanguageLevels";
import Reviews from "../Reviews";
import TeacherInfoPanel from "../TeacherInfoPanel";
import TeacherStatsPanel from "../TeacherStatsPanel";
import {
  CardLi,
  FavoriteButton,
  ImgWrapperDiv,
  AvatarImg,
  ContentDiv,
  StatsWrapperDiv,
  NameH2,
  ReadMoreButton,
  ExperienceP,
} from "./index";

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
    <CardLi>
      <FavoriteButton type="button">
        <Icon iconId="favorite" />
      </FavoriteButton>

      <ImgWrapperDiv>
        <AvatarImg src={teacher.avatar_url} alt="Teacher's Avatar" />
        <Icon iconId="online" />
      </ImgWrapperDiv>

      <ContentDiv>
        <StatsWrapperDiv>
          <NameH2>
            {teacher.name} {teacher.surname}
          </NameH2>

          <TeacherStatsPanel
            lessons_done={teacher.lessons_done}
            rating={teacher.rating}
            price_per_hour={teacher.price_per_hour}
          />
        </StatsWrapperDiv>

        <TeacherInfoPanel
          languages={teacher.languages}
          lesson_info={teacher.lesson_info}
          conditions={teacher.conditions}
        />

        <ReadMoreButton type="button">Read more</ReadMoreButton>
        <ExperienceP>{teacher.experience}</ExperienceP>

        <Reviews reviews={teacher.reviews} />

        <LanguageLevels levels={teacher.levels} />

        <Button type="button" padding="16px 48px">
          Book trial lesson
        </Button>
      </ContentDiv>
    </CardLi>
  );
};

export default TeacherCard;
