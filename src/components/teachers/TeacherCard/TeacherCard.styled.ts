import styled from "@emotion/styled";
import { TStylesProps } from "shared.types";

export const CardLi = styled.li`
  position: relative;
  display: flex;
  gap: 24px;

  padding: 24px;
  border-radius: 24px;
  background-color: #ffffff;

  @media screen and (min-width: 425px) {
    gap: 48px;
  }
`;

export const FavoriteButton = styled.button<TStylesProps>`
  position: absolute;
  top: 24px;
  right: 24px;

  margin-left: 32px;
  padding: 0;
  background-color: transparent;

  & svg {
    width: 26px;
    height: 26px;

    fill: none;
    stroke: ${({ theme }) => theme.color.black};
  }
`;

export const ImgWrapperDiv = styled.div<TStylesProps>`
  position: sticky;
  top: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.yellow.light};

  & > svg {
    position: absolute;

    top: 8px;
    right: 10px;

    width: 6px;
    height: 6px;
  }

  @media screen and (min-width: 425px) {
    width: 120px;
    height: 120px;

    & > svg {
      top: 16px;
      right: 20px;
    }
  }
`;

export const AvatarImg = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 50%;

  @media screen and (min-width: 425px) {
    width: 96px;
    height: 96px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;

  width: calc(100% - 84px);

  @media screen and (min-width: 425px) {
    width: calc(100% - 168px);
  }
`;

export const StatsWrapperDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 56px;

    padding-right: 90px;
  }
`;

export const NameH2 = styled.h2`
  font-weight: 500;
  font-size: 24px;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    align-self: end;
  }
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
