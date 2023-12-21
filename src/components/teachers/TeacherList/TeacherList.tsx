import { FC, ReactElement } from "react";
import TeacherCard from "../TeacherCard";

import teachers from "../../../../teachers.json";

const TeacherList: FC = (): ReactElement => {
  return (
    <ul>
      <TeacherCard teacher={teachers[0]} />
    </ul>
  );
};

export default TeacherList;
