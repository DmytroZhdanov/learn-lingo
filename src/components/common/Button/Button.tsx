import { FC, ReactElement, ReactNode } from "react";

import { StyledBtn } from "./index";

type TButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  padding: string;
  children: ReactNode;
  disabled?: boolean;
};

const Button: FC<TButtonProps> = ({
  type = "submit",
  padding,
  children,
  disabled = false,
}): ReactElement => {
  return (
    <StyledBtn type={type} padding={padding} disabled={disabled}>
      {children}
    </StyledBtn>
  );
};

export default Button;
