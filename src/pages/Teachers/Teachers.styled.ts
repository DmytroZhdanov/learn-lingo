import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div`
  margin: 0 auto;

  width: calc(100vw - 40px);
  padding: 20px 0 32px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100vw;
    padding: 20px 32px 32px;
  }

  @media screen and (min-width: 1244px) {
    width: 1244px;
  }
`;

export const LoadMoreButton = styled.button<TStylesProps>`
  display: block;
  margin: 32px auto 0;

  color: ${({ theme }) => theme.color.black};
  font-size: clamp(16px, 1.7vw, 24px);
  text-decoration: underline;

  background-color: transparent;

  transition: transform ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
