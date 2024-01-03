import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const StyledBtn = styled.button<TStylesProps & { padding: string; disabled: boolean }>`
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 700;
  line-height: ${28 / 18};

  padding: ${({ padding }) => padding};

  border-radius: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.yellow.light : theme.color.yellow.main};
`;
