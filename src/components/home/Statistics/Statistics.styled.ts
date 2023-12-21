import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ListUl = styled.ul<TStylesProps>`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  padding: 40px 0;

  border-radius: 30px;
  border: 1.5px dashed ${({ theme }) => theme.color.yellow.main};
`;

export const ItemLi = styled.li`
  display: flex;
  gap: 16px;

  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  line-height: ${18 / 14};
  letter-spacing: -0.28px;
`;

export const Span = styled.span<TStylesProps>`
  color: ${({ theme }) => theme.color.black};
  font-size: 28px;
  font-weight: 500;
  line-height: ${32 / 28};
  letter-spacing: -0.56px;
`;
