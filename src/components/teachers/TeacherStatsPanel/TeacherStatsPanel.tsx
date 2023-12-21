import { FC, ReactElement } from "react";

import Icon from "components/common/Icon";

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
    <div>
      <p>
        <Icon iconId="book" />
        Lessons online
      </p>

      <p>Lessons done: {lessons_done}</p>

      <p>
        <Icon iconId="rating" />
        Rating: {rating}
      </p>

      <p>Price / 1 hour: {price_per_hour}$</p>

      <button type="button">
        <Icon iconId="favorite" />
      </button>
    </div>
  );
};

export default TeacherStatsPanel;
