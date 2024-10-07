import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledCollapseIcon {
  $showIcon: boolean;
  theme?: typeof inube;
}

export const Container = styled.div<IStyledCollapseIcon>`
  align-items: center;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  border: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  border-radius: 8px;
  box-shadow:
    0px 1px 3px 0px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A ||
        inube?.palette?.neutralAlpha?.N40A},
    0px 4px 8px 3px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A ||
        inube?.palette?.neutralAlpha?.N40A};
  display: flex;
  gap: ${({ $showIcon }) => ($showIcon ? "16px" : "64px")};
  padding: 8px 12px 12px 12px;
`;

export const IconWrapper = styled.div`
  align-items: center;
  border-left: 1px solid
    ${({ theme }) =>
      theme?.palette?.neutralAlpha?.N40A ||
    inube?.palette?.neutralAlpha?.N40A};
  display: flex;
  padding: 0px 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 64px;
`;
