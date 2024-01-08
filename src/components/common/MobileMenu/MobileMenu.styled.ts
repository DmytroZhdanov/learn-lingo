import styled from "@emotion/styled";

import { TStylesProps } from "shared.types";

export const MenuDiv = styled.div<TStylesProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50vw;
  height: 100vh;
  padding: 140px 20px 40px;

  background-color: ${({ theme }) => theme.color.yellow.light};
  border-left: 1px solid ${({ theme }) => theme.color.yellow.main};

  @media screen and (min-width: 768px) {
    padding-top: 200px;
  }

  &.modal-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }

  /* For unmounting */
  &.modal-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.modal-exit-active {
    opacity: 1;
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 32px;

  padding: 0;
  background-color: transparent;

  & > svg {
    width: 24px;
    height: 24px;

    stroke: #ffffff;

    transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

    &:hover {
      transform: scale(1.2);
    }
  }
`;
