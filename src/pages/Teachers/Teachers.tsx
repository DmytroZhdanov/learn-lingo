import { FC, ReactElement } from "react";
import Filter from "../../components/teachers/Filter";
import TeacherList from "../../components/teachers/TeacherList";
import { ContainerDiv } from "./index";

const Teachers: FC = (): ReactElement => {
  return (
    <ContainerDiv>
      <Filter />
      <TeacherList />
    </ContainerDiv>
  );
};

export { Teachers };
