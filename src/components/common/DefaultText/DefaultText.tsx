import { FC, ReactElement } from "react";

import { TextP } from "./index";

type TDefaultTextProps = {
  children: string;
};

const DefaultText: FC<TDefaultTextProps> = ({ children }): ReactElement => {
  return <TextP>{children}</TextP>;
};

export default DefaultText;
