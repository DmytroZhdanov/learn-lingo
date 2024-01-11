import { FC, ReactElement, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import Filter from "../../components/teachers/Filter";
import TeacherList from "../../components/teachers/TeacherList";
import { ContainerDiv } from "./index";

import { TTeacher } from "shared.types";
import DefaultText from "components/common/DefaultText";

export async function loader() {
  const { data }: { data: TTeacher[] } = await axios.get(
    `https://${
      import.meta.env.VITE_PROJECT_ID
    }-default-rtdb.europe-west1.firebasedatabase.app/.json`
  );

  return data;
}

const Teachers: FC = (): ReactElement => {
  const teachers = useLoaderData() as TTeacher[];
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  const [inputLanguages, setInputLanguages] = useState<string | null>(null);
  const [inputLevel, setInputLevel] = useState<string | null>(null);
  const [inputPrice, setInputPrice] = useState<string | null>(null);

  useEffect(() => {
    setFilteredTeachers(
      teachers.filter(
        (teacher: TTeacher): boolean =>
          (inputLanguages ? teacher.languages.includes(inputLanguages) : true) &&
          (inputLevel ? teacher.levels.includes(inputLevel) : true) &&
          (inputPrice ? teacher.price_per_hour <= +inputPrice : true)
      )
    );
  }, [inputLanguages, inputLevel, inputPrice]);

  return (
    <ContainerDiv>
      <Filter
        languages={teachers
          .flatMap(teacher => teacher.languages)
          .filter((language, index, array) => array.indexOf(language) === index)}
        onInputLanguagesChange={setInputLanguages}
        onInputLevelChange={setInputLevel}
        onInputPriceChange={setInputPrice}
      />

      {filteredTeachers.length > 0 ? (
        <TeacherList teachers={filteredTeachers} />
      ) : (
        <DefaultText>
          Sorry... We couldn't find any teacher matching your query. Try to adjust filter to find
          one!
        </DefaultText>
      )}
    </ContainerDiv>
  );
};

export { Teachers };
