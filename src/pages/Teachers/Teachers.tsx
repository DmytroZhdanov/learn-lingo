import { FC, ReactElement } from "react";
import Filter from "../../components/teachers/Filter";
import TeacherList from "../../components/teachers/TeacherList";

const Teachers: FC = (): ReactElement => {
  return (
    <div>
      Teachers
      <Filter />
      <TeacherList />
    </div>
  );
};

export { Teachers };
