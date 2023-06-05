import styled from "styled-components";
import bannerImg from "../../assets/Banner-Image.svg";
import flowerPattern from "../../assets/flower-pattern-banner.svg";
import shopIcon from "../../assets/banner-shopping-icon.svg";
import { Button } from "components/Button";
const StyledBanner = styled.div`
  display: flex;
  height: 847px;
  width: 100%;
  background-image: url(${flowerPattern});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-color: #f0f0f0;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  /* gap: 98px; */
  h2,
  span,
  Button {
    font-family: "Roboto";
    font-style: normal;
    text-transform: capitalize;
  }
  h2 {
    margin: 52px 0px;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
  }
  span {
    margin-bottom: 66px;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
  }
  Button {
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;

    text-transform: capitalize;
  }
  .left {
    display: flex;
    width: 45%;
    flex-direction: column;
    align-items: stretch;
    
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .right {
    display: flex;
    width: 30%;
    justify-content: center;
  }
`;
export const Banner = () => {
  return (
    <StyledBanner>
      <div className="left">
        <h2>Collections</h2>
        <span>
          you can explore ans shop many differnt collection from various barands
          here.
        </span>
        <Button
          icon={shopIcon}
          bgColor="#1E2832"
          textColor="white"
          borderRadius="0px"
          width="223px"
          height="72px"
        >
          shop now
        </Button>
      </div>
      <div className="right">
        <img src={bannerImg} alt="" />
      </div>
    </StyledBanner>
  );
};
