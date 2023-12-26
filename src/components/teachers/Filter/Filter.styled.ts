import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div`
  display: flex;
  gap: 20px;

  padding: 32px 0;
`;

export const SelectWrapperDiv = styled.div`
  &:nth-of-type(1) {
    width: 220px;
  }

  &:nth-of-type(2) {
    width: 200px;
  }

  &:nth-of-type(3) {
    width: 124px;
  }
`;

export const Label = styled.label<TStylesProps>`
  display: block;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.color.grey};
  font-size: 14px;
  font-weight: 500;
  line-height: ${18 / 14};
`;
