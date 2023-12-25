import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const CardLi = styled.li`
  position: relative;
  display: flex;
  gap: 48px;

  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background-color: #ffffff;
`;

export const FavoriteButton = styled.button<TStylesProps>`
  position: absolute;
  top: 24px;
  right: 24px;

  margin-left: 32px;
  background-color: transparent;

  & svg {
    width: 26px;
    height: 26px;

    fill: none;
    stroke: ${({ theme }) => theme.color.black};
  }
`;

export const ImgWrapperDiv = styled.div<TStylesProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;

  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.yellow.light};

  & > svg {
    position: absolute;
    top: 16px;
    right: 20px;

    width: 12px;
    height: 12px;
  }
`;

export const AvatarImg = styled.img`
  width: 96px;
  height: 96px;

  border-radius: 50%;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;

  width: 968px;
`;

export const StatsWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 56px;
  padding-right: 90px;
`;

export const NameH2 = styled.h2`
  font-weight: 500;
  font-size: 24px;

  align-self: end;
`;

export const ReadMoreButton = styled.button<TStylesProps>`
  padding: 0;
  margin-top: -16px;

  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  line-height: ${24 / 16};
  text-decoration-line: underline;
  background-color: transparent;
`;

export const ExperienceP = styled.p`
  line-height: ${24 / 16};
`;
