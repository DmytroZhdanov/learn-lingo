import { FC, ReactElement } from "react";
import sprite from "../../../assets/sprite/sprite.svg";

type TIconProps = {
  iconId: string;
};

const Icon: FC<TIconProps> = ({ iconId }): ReactElement => {
  return (
    <svg>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
