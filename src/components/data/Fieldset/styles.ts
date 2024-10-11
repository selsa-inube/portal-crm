import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledContainerFieldset {
  $aspectRatio?: string;
  $isMobile: boolean;
  $hasOverflow?: boolean;
  $slim?: boolean;
}

export const StyledContainerFieldset = styled.div<IStyledContainerFieldset>`
  overflow-y: ${({ $hasOverflow }) => ($hasOverflow ? "visible" : "auto")};
  overflow-x: hidden;
  border-radius: 8px;
  border-width: ${({ $slim }) => ($slim ? "1px" : "2px")};
  border-style: solid;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  border-color: ${({ $slim, theme }) =>
    $slim
      ? theme?.palette?.neutral?.N50 || inube.palette.neutral.N50
      : theme?.palette?.neutral?.N200 || inube.palette.neutral.N200};
  box-shadow: 0px 2px 6px
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  padding-left: 8px;

  ${({ $isMobile, theme }) =>
    !$isMobile &&
    `
    &::-webkit-scrollbar {
      width: 16px; 
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${
        theme?.palette?.neutral?.N30 || inube.palette.neutral.N30
      };
      border-radius: 8px;
    }
  `}
`;
