import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
  position: relative;

  width: calc(100vw - 40px);
  height: calc((100vw - 40px) / (568 / 530));

  background-color: ${({ theme }) => theme.color.yellow.light};
  border-radius: 30px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: calc(100vw - 64px);
    height: calc((100vw - 64px) / (568 / 530));
  }

  @media screen and (min-width: 1120px) {
    width: calc(50vw - 88px);
    height: calc((50vw - 88px) / (568 / 530));
  }

  @media screen and (min-width: 1440px) {
    width: 568px;
    height: 530px;

    padding: 80px 114px;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 1439px) {
    width: calc(100% / 1.67);
    transform: translate(33.5%, 28%);
  }

  /* @media screen and (min-width: 1440px) {
    width: 340px;
  } */
`;

export const IMacDiv = styled.div<TStylesProps>`
  position: absolute;
  left: calc(50% - (100% / 3.16));
  bottom: calc(100% / -7.89);

  width: calc(100% / 1.58);
  height: calc((100% / 1.58) / 1.46);

  padding-top: calc(100% / 8.9);

  background-image: ${({ theme }) => theme.color.iMacGradient.yellow};
  border-radius: 12px;

  & > svg {
    display: block;

    width: calc(100% / 7.5);
    height: calc(100% / 4.41);

    margin: 0 auto;

    fill: url(#yellow) ${({ theme }) => theme.color.yellow.light};

    @media screen and (min-width: 1440px) {
      width: 48px;
      height: 56px;
    }
  }

  @media screen and (min-width: 1440px) {
    bottom: -72px;
    left: 104px;

    width: 360px;
    height: 247px;

    padding-top: 64px;
  }
`;
