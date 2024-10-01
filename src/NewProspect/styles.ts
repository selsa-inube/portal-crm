import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledContainer = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
  border: 2px solid
    ${({ theme }) =>
      theme?.divider?.stroke?.color || inube.divider.stroke.color};
`;
