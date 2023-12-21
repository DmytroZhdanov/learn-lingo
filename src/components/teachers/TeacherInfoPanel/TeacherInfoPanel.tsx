import { FC, ReactElement } from "react";

type TTeacherInfoPanelProps = {
  languages: string[];
  lesson_info: string;
  conditions: string[];
};

const TeacherInfoPanel: FC<TTeacherInfoPanelProps> = ({
  languages,
  lesson_info,
  conditions,
}): ReactElement => {
  return (
    <div>
      <p>
        <span>Speaks: </span>
        <span>{languages.join(", ")}</span>
      </p>

      <p>
        <span>Lesson Info: </span>
        <span>{lesson_info}</span>
      </p>

      <p>
        <span>Conditions: </span>
        <span>{conditions.join(" ")}</span>
      </p>
    </div>
  );
};

export default TeacherInfoPanel;
