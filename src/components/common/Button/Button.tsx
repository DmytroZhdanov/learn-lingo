import { FC, ReactElement, ReactNode } from "react";

import { StyledBtn } from "./index";

type TButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  padding: string;
  children: ReactNode;
};

const Button: FC<TButtonProps> = ({ type, padding, children }): ReactElement => {
  return (
    <StyledBtn type={type} padding={padding}>
      {children}
    </StyledBtn>
  );
};

export default Button;
