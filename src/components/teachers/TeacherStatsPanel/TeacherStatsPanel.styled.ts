import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
  display: flex;
  gap: 32px;
  align-self: start;

  font-weight: 500;
  line-height: ${24 / 16};

  & svg {
    width: 16px;
    height: 16px;
  }

  & p {
    position: relative;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  & p:not(:last-of-type)::after {
    content: "|";
    position: absolute;
    right: -18px;

    color: rgba(18, 20, 23, 0.2);
  }
`;

export const OnlineP = styled.p`
  & svg {
    fill: none;
    stroke: #000000;
  }
`;

export const PriceSpan = styled.span<TStylesProps>`
  color: ${({ theme }) => theme.color.greenPrice};
`;
