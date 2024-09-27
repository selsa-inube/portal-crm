import styled from "styled-components";

const StyledTitle = styled.div`
  padding: 32px 140px 64px;

  @media screen and (max-width: 805px) {
    padding: 32px 32px 32px;
  }
`;

const StyledContainerCards = styled.div`
  box-sizing: border-box;
  max-width: 1700px;
  padding: 0px 120px 32px 170px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (max-width: 805px) {
    justify-content: center;
    padding: 0px 12px 32px 12px;
  }
`;

export { StyledTitle, StyledContainerCards };
