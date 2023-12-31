import { FC, MouseEvent, ReactElement, useState } from "react";

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
import BasicModalWindow from "components/common/BasicModalWindow";
import BookingForm from "../BookingForm";
import { TTeacher } from "shared.types";

type TTeacherCardProps = {
  teacher: TTeacher;
};

const TeacherCard: FC<TTeacherCardProps> = ({ teacher }): ReactElement => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target.id === "expand") {
      setIsExpanded(true);
    } else {
      setIsModalOpen(true);
    }
  };

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

        {isExpanded ? (
          <>
            <ExperienceP>{teacher.experience}</ExperienceP>
            <Reviews reviews={teacher.reviews} />
          </>
        ) : (
          <ReadMoreButton id="expand" type="button" onClick={handleBtnClick}>
            Read more
          </ReadMoreButton>
        )}

        <LanguageLevels levels={teacher.levels} />

        <Button type="button" padding="16px 48px" onClick={handleBtnClick}>
          Book trial lesson
        </Button>
      </ContentDiv>

      <BasicModalWindow isShown={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingForm
          teacherName={`${teacher.name} ${teacher.surname}`}
          teacherAvatar={teacher.avatar_url}
        />
      </BasicModalWindow>
    </CardLi>
  );
};

export default TeacherCard;
