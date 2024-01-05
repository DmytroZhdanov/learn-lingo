import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;

  width: calc(100vw - 40px);

  padding: 20px 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: calc(100vw - 64px);
  }

  @media screen and (min-width: 1248px) {
    width: 1184px;
  }
`;

export const MenuButton = styled.button<TStylesProps>`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;

  & > svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.color.yellow.main};
  }
`;
