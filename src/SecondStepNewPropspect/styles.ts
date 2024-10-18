import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledContainer {
  $isMobile?: boolean;
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
  flex-direction: ${({ $isMobile }) => $isMobile && "column"};
  overflow-y: ${({ $isMobile }) => $isMobile && "auto"};
  max-height: ${({ $isMobile }) => $isMobile && "436px"};
  border: 2px solid
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
`;
