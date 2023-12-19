import { FC, ReactElement, ReactNode } from "react";

import { StyledBtn } from "./index";

type TButtonProps = {
  padding: string;
  children: ReactNode;
};

const Button: FC<TButtonProps> = ({ padding, children }): ReactElement => {
  return <StyledBtn padding={padding}>{children}</StyledBtn>;
};

export default Button;
