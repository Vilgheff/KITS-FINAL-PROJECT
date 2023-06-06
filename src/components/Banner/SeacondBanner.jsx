import styled from "styled-components";
import backgroundBanner from "../../assets/background-banner2.svg";
import ZaraLogo1 from "../../assets/ZaraLogo 1.svg";
import ZaraLogo2 from "../../assets/ZaraLogo 2.svg";
import { Button } from "components/Button";

const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 776px;
  margin-top: 140px;
  background-image: url(${backgroundBanner});
  gap: 55px;
  display: flex;
  .zaralogo1 {
    display: block;
    position: absolute;
    left: 1244px;
    top: 51px;
  }
  .zaralogo2 {
    width: 191px;
    height: 81px;
  }
  .describe {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;

    text-transform: capitalize;

    color: #ff6f61;
    width: 540px;
  }
  Button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;

    text-transform: capitalize;

    color: #1e2832;
  }
`;
export const SeacondBanner = () => {
  return (
    <StyledBanner>
      <img src={ZaraLogo1} alt="" className="zaralogo1" />
      <div className="describe">
        <img src={ZaraLogo2} alt="" className="zaralogo2" />
        <p>
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <Button
          width="237px"
          height="72px"
          bgColor="white"
          textColor="black"
          borderRadius="0px"
        >
          {" "}
          see collection{" "}
        </Button>
      </div>
    </StyledBanner>
  );
};
