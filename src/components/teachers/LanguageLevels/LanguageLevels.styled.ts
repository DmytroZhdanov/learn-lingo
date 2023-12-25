import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ListUl = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LevelLi = styled.li<TStylesProps & { selected: boolean }>`
  padding: 8px 12px;

  font-size: 14px;
  font-weight: 500;
  line-height: ${16 / 14};

  border-radius: 35px;
  border: 1px solid
    ${({ selected, theme }) => (selected ? theme.color.yellow.main : "rgba(18, 20, 23, 0.2)")};
  background-color: ${({ selected, theme }) => (selected ? theme.color.yellow.main : "none")};
`;
