import { ShowCase } from "components/ShowCase";
import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 312px;
  max-height: 478px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  .name {
    width: 100%;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #000000;
  }
  .typeprice {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Card = ({ name, type, price, imgSrc }) => {
  return (
    <StyledCard name={name} type={type} price={price} imgSrc={imgSrc}>
      <ShowCase
        imgSrc={imgSrc}
        width="100%"
        height="auto"
        bgSize="cover"
      ></ShowCase>
      <div className="nameandprice">
        <div className="name"> {name} </div>
        <div className="typeprice">
          <div className="type">{type}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </StyledCard>
  );
};
