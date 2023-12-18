import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const Nav = styled.nav<TStylesProps>`
  display: flex;
  gap: 28px;

  line-height: ${20 / 16};

  & > a {
    text-transform: capitalize;

    &.active::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.yellow.main};
    }
  }
`;
