import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import TeacherList from "../../components/teachers/TeacherList";
import { ContainerDiv } from "pages/Teachers";

import { TTeacher } from "shared.types";
import { selectFavorites } from "../../redux/favorite/selectors";

const Favorites: FC = (): ReactElement => {
  const favorites: TTeacher[] = useSelector(selectFavorites);

  return (
    <ContainerDiv>
      <TeacherList teachers={favorites} />
    </ContainerDiv>
  );
};

export { Favorites };
