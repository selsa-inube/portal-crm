import styled from "styled-components";
import { inube } from "@inubekit/foundations";

import { StyledMenuBoxShadowColor } from "./config";

const StyledMenu = styled.div`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  border-radius: 8px;
  box-shadow:
    0px 4px 4px 0px ${StyledMenuBoxShadowColor},
    0px 8px 12px 6px ${StyledMenuBoxShadowColor};
  padding: 6px 0px;
  position: absolute;
  right: 1px;
  width: 227px;
  z-index: 2;
`;

const StyledContainerLabel = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 40px;
  gap: 8px;
  margin: 0px;
  padding: 12px 16px;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
    cursor: pointer;
  }
`;

export { StyledMenu, StyledContainerLabel };
