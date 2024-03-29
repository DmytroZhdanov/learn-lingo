import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const Nav = styled.nav<TStylesProps>`
  display: flex;
  gap: 28px;

  line-height: ${20 / 16};

  & > a {
    padding: 14px 0;
    text-transform: capitalize;

    transition: transform ${({ theme }) => theme.transition};

    &.active::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.yellow.main};
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 1119px) {
    flex-direction: column;
    align-items: center;
  }
`;
