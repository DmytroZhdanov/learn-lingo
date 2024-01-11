import { FC, MouseEvent, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { selectFavorites } from "../../../redux/favorite/selectors";
import { addToFavorite, removeFromFavorite } from "../../../redux/favorite/favoriteSlice";

type TTeacherCardProps = {
  teacher: TTeacher;
};

const TeacherCard: FC<TTeacherCardProps> = ({ teacher }): ReactElement => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const dispatch = useDispatch();

  const favorites: TTeacher[] = useSelector(selectFavorites);

  useEffect(() => {
    setIsFavorite(favorites.findIndex((item: TTeacher) => item.id === teacher.id) !== -1);
  }, [favorites, teacher]);

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (e.target.id === "expand") {
      setIsExpanded(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleFavoriteBtnClick = (): void => {
    if (!isFavorite) {
      dispatch(addToFavorite(teacher));
    } else {
      dispatch(removeFromFavorite(teacher.id));
    }
  };

  return (
    <CardLi>
      <FavoriteButton type="button" isFavorite={isFavorite} onClick={handleFavoriteBtnClick}>
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
