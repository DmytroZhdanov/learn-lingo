import { FC, ReactElement, ReactNode } from "react";

import { StyledBtn } from "./index";

type TButtonProps = {
  type?: "button" | "submit" | "reset";
  padding: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<TButtonProps> = ({
  type = "submit",
  padding,
  children,
  disabled = false,
  onClick,
}): ReactElement => {
  return (
    <StyledBtn type={type} padding={padding} disabled={disabled} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default Button;
