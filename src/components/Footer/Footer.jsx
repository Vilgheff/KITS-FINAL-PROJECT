import { Button } from "components/Button";
import styled from "styled-components";
import paymentMenthodsIcon from "../../assets/icons_payment.svg";
import fbIcon from "../../assets/fbIcon.svg";
import twIcon from "../../assets/twIcon.svg";
import lnIcon from "../../assets/lnIcon.svg";
import instIcon from "../../assets/InstaIcon.svg";

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  height: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 53px;
    background-color: #1e2832;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  h3 {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;

    color: #000000;
    margin: 0;
  }
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;

    color: rgba(30, 40, 50, 0.75);
  }
  ul {
    list-style-type: none;
    margin: 0;
  }
  span {
    color: white;
  }
  li {
    margin: 0px 0px 12px 0px;
    /* H6 */

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .left {
    height: auto;
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .button-group {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .right {
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <div className="content">
        <div className="left">
          <h3>Lisa</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="button-group">
            <Button icon={fbIcon}></Button>
            <Button icon={twIcon}></Button>
            <Button icon={lnIcon}></Button>
            <Button icon={instIcon}></Button>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>CATALOG</li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Necklaces
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Hoodies
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Jewelry Box
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                T-Shirt
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Jacket
              </Button>
            </li>
          </ul>
          <ul>
            <li>ABOUT US</li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Our Producers
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Sitemap
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                FAQ
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                About Us
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Terms & Conditions
              </Button>
            </li>
          </ul>
          <ul>
            <li>CUSTOMER SERVICES</li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Contact Us
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Track Your Order
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Product Care & Repair
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Book an Appointment
              </Button>
            </li>
            <li>
              <Button
                bgColor="transparent"
                borderRadius="0px"
                textColor="#1E2832"
                width="fit-content"
                height="fit-content"
              >
                Shipping & Returns
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay">
        <span>© 2023 LISA , Inc.</span>
        <img src={paymentMenthodsIcon} alt="" />
        <Button
          bgColor="transparent"
          borderRadius="0px"
          textColor="white"
          width="fit-content"
          height="fit-content"
        >
          Scroll to top
        </Button>
      </div>
    </StyledFooter>
  );
};
