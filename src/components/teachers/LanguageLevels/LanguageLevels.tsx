import { FC, ReactElement } from "react";
import { LevelLi } from "./index";

type TLanguageLevelProps = {
  levels: string[];
};

const LanguageLevels: FC<TLanguageLevelProps> = ({ levels }): ReactElement => {
  return (
    <ul>
      {levels.map(
        (level: string): ReactElement => (
          <LevelLi selected={true}>#{level}</LevelLi>
        )
      )}
    </ul>
  );
};

export default LanguageLevels;
