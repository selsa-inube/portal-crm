import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: 24px;
  min-height: 170px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N900 || inube.palette.neutral.N900};
  border: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
    box-shadow: none;

    && figure {
      color: ${({ theme }) =>
        theme?.text?.primary?.content?.color?.regular ||
        inube.text.primary.content.color.regular};
    }
  }

  @media (max-width: 400px) {
    padding: 16px;
    width: 100%;
    min-height: 100px;
    gap: 8px;

    div {
      gap: 4px;
    }
  }
`;

export { StyledAppCard };
