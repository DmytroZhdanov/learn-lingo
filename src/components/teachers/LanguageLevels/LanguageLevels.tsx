import { FC, ReactElement } from "react";
import { ListUl, LevelLi } from "./index";

type TLanguageLevelProps = {
  levels: string[];
};

const LanguageLevels: FC<TLanguageLevelProps> = ({ levels }): ReactElement => {
  return (
    <ListUl>
      {levels.map(
        (level: string): ReactElement => (
          <LevelLi key={level} selected={true}>
            #{level}
          </LevelLi>
        )
      )}
    </ListUl>
  );
};

export default LanguageLevels;
