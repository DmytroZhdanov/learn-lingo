import { FC, ReactElement } from "react";
import TeacherList from "../../components/teachers/TeacherList";

const Favorites: FC = (): ReactElement => {
  return (
    <div>
      Favorites page
      <TeacherList />
    </div>
  );
};

export { Favorites };
