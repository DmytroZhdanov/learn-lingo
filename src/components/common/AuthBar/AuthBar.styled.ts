import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const List = styled.ul<TStylesProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  & > li {
    transition: transform ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;

export const Button = styled.button<TStylesProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 14px 0;
  font-size: clamp(12px, 2vw, 16px);
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
  padding: 14px 20px;
  border-radius: 12px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 375px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
