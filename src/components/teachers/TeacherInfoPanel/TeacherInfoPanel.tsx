import { FC, ReactElement } from "react";

import { InfoListDl, WrapperDiv, TermDt, LanguagesDd } from "./index";

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
    <InfoListDl>
      <WrapperDiv>
        <TermDt>Speaks</TermDt>
        <LanguagesDd>{languages.join(", ")}</LanguagesDd>
      </WrapperDiv>

      <WrapperDiv>
        <TermDt>Lesson Info</TermDt>
        <dd>{lesson_info}</dd>
      </WrapperDiv>

      <WrapperDiv>
        <TermDt>Conditions</TermDt>
        <dd>{conditions.join(" ")}</dd>
      </WrapperDiv>
    </InfoListDl>
  );
};

export default TeacherInfoPanel;
