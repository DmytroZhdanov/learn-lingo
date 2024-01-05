import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
  width: calc(100vw - 40px);
  padding: 46px 32px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.background};

  @media screen and (min-width: 768px) {
    width: calc(100vw - 64px);
    padding: 98px 64px;
  }

  @media screen and (min-width: 1120px) {
    width: 50vw;
  }

  @media screen and (min-width: 1120px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 0;
    padding-bottom: 0;

    & button {
      padding: 16px 0;
      width: calc(100% / 2.69);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 720px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 32px;

  font-size: clamp(24px, 3.35vw, 48px);
  font-weight: 500;
  line-height: ${56 / 48};
  letter-spacing: -0.96px;
`;

export const TitleSpan = styled.span<TStylesProps>`
  width: 195px;
  height: 40px;

  font-style: italic;
  font-weight: 400;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.yellow.light};
`;

export const TextP = styled.p`
  margin-bottom: 32px;

  font-size: clamp(8px, 1vw, 16px);
  line-height: ${22 / 16};
  letter-spacing: -0.32px;

  @media screen and (min-width: 768px) {
    width: 472px;
    margin-bottom: 64px;
  }
`;
