import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
  width: 720px;
  padding: 98px 64px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const TitleH1 = styled.h1`
  margin-bottom: 32px;

  font-size: 48px;
  font-weight: 500;
  line-height: ${56 / 48};
  letter-spacing: -0.96px;
`;

export const TitleSpan = styled.span<TStylesProps>`
  display: inline-block;
  width: 195px;
  height: 40px;

  font-style: italic;
  font-weight: 400;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.yellow.light};
`;

export const TextP = styled.p`
  width: 472px;
  margin-bottom: 64px;

  line-height: ${22 / 16};
  letter-spacing: -0.32px;
`;
