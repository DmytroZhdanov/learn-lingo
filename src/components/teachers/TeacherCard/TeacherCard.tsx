import { FC, ReactElement } from "react";
import LanguageLevel from "../LanguageLevel";

const TeacherCard: FC = (): ReactElement => {
  return (
    <li>
      TeacherCard component
      <ul>
        <LanguageLevel content={"A1 Beginner"} selected={false} />
      </ul>
    </li>
  );
};

export default TeacherCard;
