import { FC, ReactElement } from "react";

import TeacherCard from "../TeacherCard";
import { ListUl } from "./index";

import { TTeacher } from "shared.types";

type TTeacherListProps = {
  teachers: TTeacher[];
};

const TeacherList: FC<TTeacherListProps> = ({ teachers }): ReactElement => {
  return (
    <ListUl>
      {teachers &&
        teachers.map(
          (teacher: TTeacher): ReactElement => <TeacherCard key={teacher.id} teacher={teacher} />
        )}
    </ListUl>
  );
};

export default TeacherList;
