import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
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

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    align-self: start;
    justify-content: flex-end;

    & p:not(:last-of-type)::after {
      content: "|";
      position: absolute;
      right: -18px;

      color: rgba(18, 20, 23, 0.2);
    }
  }

  @media screen and (max-width: 800px) {
    & p:nth-of-type(2)::after {
      content: "";
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1080px) {
    & p:nth-of-type(3)::after {
      content: "";
    }
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
