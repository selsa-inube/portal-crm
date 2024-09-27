import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledModal {
  $isSmallScreen: boolean;
}

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  height: 100%;
  max-height: 180px;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "312px" : "400px")};
  border-radius: 8px;
  margin: 16px;
  z-index: 3;
`;

export { StyledBackdropBlanket, StyledModal };
