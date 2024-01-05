import styled from "@emotion/styled";

export const BackgroundDiv = styled.div<{ pathname: string }>`
  min-height: 100vh;
  background-color: ${({ pathname }) => (pathname === "/" ? "#ffffff" : "#f8f8f8")};
`;
