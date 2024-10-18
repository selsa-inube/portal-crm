import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledMoneyDestinationCard = styled.label`
  & div:nth-child(1) {
    box-sizing: border-box;
    box-shadow: 0px 1px 3px 1px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
    box-shadow: 0px 1px 2px 0px
      ${({ theme }) =>
        theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
    border-radius: 8px;
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
    border: 1px solid
      ${({ theme }) =>
        theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
    cursor: pointer;
  }
`;

const StyledRadio = styled.input`
  margin: 0px;
  height: 12px;
`;

export { StyledMoneyDestinationCard, StyledRadio };
