import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button<TStylesProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 14px 0;
  font-weight: 700;
  line-height: ${20 / 16};
  color: ${({ theme }) => theme.color.black};
  background-color: transparent;

  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.yellow.main};
  }
`;

export const RegButton = styled(Button)`
  padding: 14px 40px;
  border-radius: 12px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.color.black};
`;
