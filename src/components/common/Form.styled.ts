import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

// Common elements
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

export const TextP = styled.p<{ booking?: boolean }>`
  margin-bottom: ${({ booking }) => (booking ? "20px" : "40px")};

  color: rgba(18, 20, 23, 0.8);
  line-height: ${22 / 16};
`;

export const InputWrapperDiv = styled.div<{ booking?: boolean }>`
  position: relative;
  width: ${({ booking }) => (booking ? "472px" : "440px")};

  &:first-of-type {
    margin-top: 22px;
  }

  &:last-of-type {
    margin-bottom: 22px;
  }
`;

export const ErrorP = styled.p`
  margin-top: 8px;
  padding-left: 8px;

  color: red;
`;
// /Common elements

// BookingForm elements
export const TeacherDiv = styled.div<TStylesProps>`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;

  color: ${({ theme }) => theme.color.grey};
  font-size: 12px;
  font-weight: 500;
  line-height: ${16 / 12};
`;

export const Img = styled.img`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const TeacherSpan = styled.span<TStylesProps>`
  display: block;
  margin-top: 4px;

  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  line-height: ${24 / 16};
`;

export const Fieldset = styled.fieldset<TStylesProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);

    &:checked + label::before {
      outline: 2px solid ${({ theme }) => theme.color.yellow.main};
      border: 3px solid #ffffff;
      background-color: ${({ theme }) => theme.color.yellow.main};
    }
  }
`;

export const Legend = styled.legend`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 500;
  line-height: ${32 / 24};
`;

export const RadioLabel = styled.label<TStylesProps>`
  position: relative;

  line-height: ${22 / 16};
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0px;

    display: block;
    width: 16px;
    height: 16px;
    box-sizing: border-box;

    border-radius: 50%;
    outline: 2px solid rgba(18, 20, 23, 0.2);
  }
`;
