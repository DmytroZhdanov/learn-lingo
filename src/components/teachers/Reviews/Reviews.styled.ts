import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  font-weight: 500;
`;

export const NameH3 = styled.h3<TStylesProps>`
  margin-bottom: 2px;

  line-height: ${24 / 16};
  color: ${({ theme }) => theme.color.grey};
`;

export const RatingP = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 16px;

  font-size: 14px;
  line-height: ${18 / 24};

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const CommentP = styled.p`
  line-height: ${24 / 16};
`;
