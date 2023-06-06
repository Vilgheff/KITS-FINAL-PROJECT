import styled from "styled-components";
import  backgroundBanner  from "../../assets/background-banner2.svg";

const StyledBanner = styled.div`
  width: 100%;
  max-height: fit-content;
  margin-top: 140px;
`;
export const SeacondBanner = () => {
  return (
    <StyledBanner>
      <img src={backgroundBanner} alt="" />
    </StyledBanner>
  );
};
