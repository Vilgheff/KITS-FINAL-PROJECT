import { Button } from "components/Button";
import styled from "styled-components";
import filterIcon from "../../assets/filter-icon.svg";
import { Card } from "components/Card";
import ShowCaseImg from "../../assets/image-category-1.svg";

const StyledNewSletter = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  Button{
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
  }
  .button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .button-group-left {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  .cards-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const NewSletter = () => {
  return (
    <StyledNewSletter>
      <h1> Or subscribe to the newsletter </h1>
      <div className="button-group">
        <div className="button-group-left">
          <Button width="fit-content" height="fit-content" textColor="color: rgba(0, 0, 0, 0.5);">
            All products
          </Button>
          <Button width="fit-content" height="fit-content" textColor="color: rgba(0, 0, 0, 0.5);">
            T-Shirt
          </Button>
          <Button width="fit-content" height="fit-content" textColor="color: rgba(0, 0, 0, 0.5);">
            hoodies
          </Button>
          <Button width="fit-content" height="fit-content" textColor="color: rgba(0, 0, 0, 0.5);">
            jacket
          </Button>
        </div>
        <Button width="92px" height="32px" icon={filterIcon} bgColor="black" borderRadius="0px" textColor="white">
          filter
        </Button>
      </div>
      <div className="cards-group">
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
        <Card
          name="Adicolor Classics Joggers"
          type="Dress"
          price="$63.85"
          imgSrc={ShowCaseImg}
        />
      </div>
    </StyledNewSletter>
  );
};
