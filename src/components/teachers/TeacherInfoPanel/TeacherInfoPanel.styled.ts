import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const InfoListDl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-weight: 500;
  line-height: ${24 / 16};
`;

export const WrapperDiv = styled.div`
  display: flex;
  gap: 4px;
`;

export const TermDt = styled.dt<TStylesProps>`
  color: ${({ theme }) => theme.color.grey};

  &::after {
    content: ":";
  }
`;

export const LanguagesDd = styled.dd`
  text-decoration: underline;
`;
