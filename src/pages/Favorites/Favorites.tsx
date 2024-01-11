import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import TeacherList from "../../components/teachers/TeacherList";
import { ContainerDiv } from "pages/Teachers";

import { TTeacher } from "shared.types";
import { selectFavorites } from "../../redux/favorite/selectors";
import DefaultText from "components/common/DefaultText";

const Favorites: FC = (): ReactElement => {
  const favorites: TTeacher[] = useSelector(selectFavorites);

  return (
    <ContainerDiv>
      {favorites.length > 0 ? (
        <TeacherList teachers={favorites} />
      ) : (
        <DefaultText>
          You don't have a favorite teachers yet... Go to Teachers page to find some!
        </DefaultText>
      )}
    </ContainerDiv>
  );
};

export { Favorites };
