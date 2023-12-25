import { FC, ReactElement } from "react";

import Icon from "components/common/Icon";
import { ContainerDiv, OnlineP, PriceSpan, FavoriteButton } from "./index";

type TTeacherStatsPanelProps = {
  lessons_done: number;
  rating: number;
  price_per_hour: number;
};

const TeacherStatsPanel: FC<TTeacherStatsPanelProps> = ({
  lessons_done,
  rating,
  price_per_hour,
}): ReactElement => {
  return (
    <ContainerDiv>
      <OnlineP>
        <Icon iconId="book" />
        Lessons online
      </OnlineP>

      <p>Lessons done: {lessons_done}</p>

      <p>
        <Icon iconId="star" />
        Rating: {rating}
      </p>

      <p>
        Price / 1 hour: <PriceSpan>{price_per_hour}$</PriceSpan>
      </p>

      <FavoriteButton type="button">
        <Icon iconId="favorite" />
      </FavoriteButton>
    </ContainerDiv>
  );
};

export default TeacherStatsPanel;
