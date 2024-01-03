import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const ContainerDiv = styled.div<TStylesProps>`
  padding: 64px;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 18px;

    & input {
      display: block;
      width: 100%;
      padding: 16px 18px;

      line-height: ${22 / 16};

      border-radius: 12px;
      border: 1px solid rgba(18, 20, 23, 0.1);

      &::placeholder {
        color: ${({ theme }) => theme.color.black};
      }
    }
  }
`;

export const TitleH2 = styled.h2`
  margin-bottom: 20px;

  font-size: 40px;
  font-weight: 500;
  line-height: ${48 / 40};
  letter-spacing: -0.8px;
`;

export const TextP = styled.p`
  margin-bottom: 40px;

  color: rgba(18, 20, 23, 0.8);
  line-height: ${22 / 16};
`;

export const InputWrapperDiv = styled.div`
  position: relative;
  width: 440px;

  &:last-of-type {
    margin-bottom: 22px;
  }
`;
