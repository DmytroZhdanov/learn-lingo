import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.4px;
  line-height: ${24 / 20};
`;
