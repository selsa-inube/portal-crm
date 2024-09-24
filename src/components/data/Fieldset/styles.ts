import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledContainerFieldset {
  $aspectRatio?: string;
  $isMobile: boolean;
  $hasOverflow?: boolean;
  $isSelected: boolean;
}

export const StyledContainerFieldset = styled.div<IStyledContainerFieldset>`
  cursor: pointer;
  box-sizing: border-box;
  overflow-x: hidden;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 8px;
  padding-left: 8px;
  overflow-y: ${({ $hasOverflow }) => ($hasOverflow ? "visible" : "auto")};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  background-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.radiofield?.background?.color?.active ||
        inube.radiofield.background.color.active
      : theme?.radiofield?.background?.color?.checked ||
        inube.palette.blue.B50};
  border-color: ${({ theme, $isSelected }) =>
    !$isSelected
      ? theme?.palette?.neutral?.N300 || inube.palette.neutral.N300
      : theme?.palette?.blue?.B300 || inube.palette.blue.B300};
  box-shadow: ${({ theme, $isSelected }) =>
    $isSelected &&
    `-12px 0px 0px ${
      theme?.radiofield?.background?.color?.checked ||
      inube.radiofield.background.color.checked
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
