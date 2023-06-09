import { Button } from "components/Button";
import { SearchBar } from "components/SearchBar/SearchBar";
import styled from "styled-components";
import MenuIcon from "../../assets/MenuIcon.svg";
import NotiIcon from "../../assets/NotifiIcon.svg";
import Avt from "../../assets/avt.svg";
import "@fontsource/roboto"; 

const StyledAdminHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .button-group {
    width: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    /* identical to box height */

    color: #535353;
  }
`;
export const AdminHeader = () => {
  return (
    <StyledAdminHeader>
      <h1>Overview</h1>
      <SearchBar></SearchBar>
      <div className="button-group">
        <Button icon={MenuIcon}></Button>
        <Button icon={NotiIcon}></Button>
        <Button icon={Avt}></Button>
      </div>
    </StyledAdminHeader>
  );
};
