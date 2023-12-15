import { FC, ReactElement } from "react";
import TeacherCard from "../TeacherCard";

const TeacherList: FC = (): ReactElement => {
  return (
    <ul>
      <TeacherCard />
    </ul>
  );
};

export default TeacherList;
