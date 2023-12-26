import styled from "@emotion/styled";

export const BackgroundDiv = styled.div<{ pathname: string }>`
  background-color: ${({ pathname }) => (pathname === "/" ? "#ffffff" : "#f8f8f8")};
`;
