import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";
import sprite from "../../../assets/sprite/sprite.svg";

export const ContainerDiv = styled.div<TStylesProps>`
  position: relative;

  width: 568px;
  height: 530px;

  padding: 80px 114px;

  background-color: ${({ theme }) => theme.color.yellow.light};
  border-radius: 30px;

  overflow: hidden;
`;

export const IMacDiv = styled.div<TStylesProps>`
  position: absolute;
  bottom: -72px;
  left: 104px;

  width: 360px;
  height: 247px;

  padding-top: 64px;

  background-image: ${({ theme }) => theme.color.iMacGradient.yellow};
  border-radius: 12px;

  & > svg {
    display: block;
    width: 48px;
    height: 56px;

    margin: 0 auto;

    fill: url(#yellow) ${({ theme }) => theme.color.yellow.light};
  }
`;

export const IconFillDiv = styled.div<TStylesProps>`
  width: 48px;
  height: 56px;

  background-image: ${({ theme }) => theme.color.appleIconFill.yellow};
`;
