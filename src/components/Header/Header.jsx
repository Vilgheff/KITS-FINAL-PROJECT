import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";
import { Button } from "components/Button";
import { useMediaQuery } from "react-responsive";
import accountIcon from "../../assets/Account-Icon.svg";
import shopIcon from "../../assets/Shop-Icon.svg";
const HeaderStyled = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #e3e3e3;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    color: #000000;
    font-family: "AmstelvarAlpha";
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .left {
    width: 25%;
  }
  .right {
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Header = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <HeaderStyled>
      <div className="left">
        <img src={searchIcon} alt="" />
      </div>
      <h1>{children}</h1>
      {!isTabletOrMobile && (
        <div className="right">
          <Button icon={accountIcon} bgColor="transparent" textColor="#1E2832">
            Account
          </Button>
          <Button icon={shopIcon} bgColor="transparent" textColor="#1E2832">
            Shoping
          </Button>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="right">
          <Button icon={accountIcon} bgColor="transparent" textColor="#1E2832">
          </Button>
          <Button icon={shopIcon} bgColor="transparent" textColor="#1E2832">
          </Button>
        </div>
      )}
    </HeaderStyled>
  );
};
