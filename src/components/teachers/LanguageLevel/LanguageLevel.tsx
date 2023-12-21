import { FC, ReactElement } from "react";
import { LevelLi } from "./index";

type TLanguageLevelProps = {
  content: string;
  selected: boolean;
};

const LanguageLevel: FC<TLanguageLevelProps> = ({ content, selected }): ReactElement => {
  return <LevelLi selected={selected}>#{content}</LevelLi>;
};

export default LanguageLevel;
