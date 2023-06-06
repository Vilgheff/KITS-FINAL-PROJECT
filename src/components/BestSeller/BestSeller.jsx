import styled from "styled-components";
import { Button } from "components/Button";
import { Card } from "components/Card";
import ShowCaseImg from "../../assets/image-category-1.svg";

const StyledBestSeller = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  Button {
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
export const BestSeller = () => {
  return (
    <StyledBestSeller>
      <h1>Best sellers</h1>
      <div className="button-group">
        <div className="button-group-left">
          <Button
            width="fit-content"
            height="fit-content"
            textColor=" rgba(0, 0, 0, 0.5)"
          >
            All products
          </Button>
          <Button
            width="fit-content"
            height="fit-content"
            textColor=" rgba(0, 0, 0, 0.5)"
          >
            T-Shirt
          </Button>
          <Button
            width="fit-content"
            height="fit-content"
            textColor=" rgba(0, 0, 0, 0.5)"
          >
            hoodies
          </Button>
          <Button
            width="fit-content"
            height="fit-content"
            textColor=" rgba(0, 0, 0, 0.5)"
          >
            jacket
          </Button>
        </div>
        <Button
          width="92px"
          height="32px"
          bgColor="black"
          borderRadius="0px"
          textColor="white"
        >
          Show All
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
        </div>
    </StyledBestSeller>
  );
};
