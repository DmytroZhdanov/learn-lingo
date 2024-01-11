import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const StyledBtn = styled.button<TStylesProps & { padding: string; disabled: boolean }>`
  padding: 12px 24px;

  color: ${({ theme }) => theme.color.black};
  font-size: clamp(12px, 1.6vw, 18px);
  font-weight: 700;
  line-height: ${28 / 18};

  border-radius: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.yellow.light : theme.color.yellow.main};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media screen and (min-width: 768px) {
    padding: ${({ padding }) => padding};
  }

  transition: transform ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
