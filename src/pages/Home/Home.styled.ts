import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: calc(100vw - 40px);
  /* padding: 20px 20px 32px; */
  padding: 20px 0 32px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100vw;
    padding: 20px 32px 32px;
  }

  @media screen and (min-width: 1120px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    width: 1376px;
    margin: 0 auto;
  }
`;
