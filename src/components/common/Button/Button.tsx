import { FC, ReactElement, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
};

const Button: FC<TButtonProps> = ({ children }): ReactElement => {
  return <button>{children}</button>;
};

export default Button;
