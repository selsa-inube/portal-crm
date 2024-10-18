import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledContainerFieldset {
  $aspectRatio?: string;
  $isMobile: boolean;
  $hasOverflow?: boolean;
  $isSelected: boolean;
  $slim?: boolean;
}

export const StyledContainerFieldset = styled.div<IStyledContainerFieldset>`
  cursor: pointer;
  box-sizing: border-box;
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
  overflow-y: ${({ $hasOverflow }) => ($hasOverflow ? "visible" : "auto")};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  background-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.palette?.neutral?.N0 || inube.palette.neutral.N0
      : theme?.palette?.blue?.B50 || inube.palette.blue.B50};
  border-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.palette?.neutral?.N300 || inube.palette.neutral.N300
      : theme?.palette?.blue?.B300 || inube.palette.blue.B300};
  box-shadow: ${({ theme, $isSelected }) =>
    $isSelected &&
    `-12px 0px 0px ${
      theme?.palette?.neutral?.N40 || inube.palette.neutral.N40
    }`};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

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
