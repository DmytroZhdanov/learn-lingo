import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  margin: 0 auto;

  width: calc(100vw - 40px);
  padding: 20px 0 32px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100vw;
    padding: 20px 32px 32px;
  }

  @media screen and (min-width: 1244px) {
    width: 1244px;
  }
`;
