import { InstaShowCase } from "components/ShowCase/InstaShowCase";
import styled from "styled-components";

const StyledInstaPrd = styled.div`
  width: 100%;
  height: 653px;
  background-color: #f0f0f0;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .itemgroup{
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;
export const InstaPrd = () => {
  return (
    <StyledInstaPrd>
      <h1>Follow products and discounts on Instagram</h1>
      <div className="itemgroup">
        <InstaShowCase></InstaShowCase>
        <InstaShowCase></InstaShowCase>
        <InstaShowCase></InstaShowCase>
        <InstaShowCase></InstaShowCase>
        <InstaShowCase></InstaShowCase>
        <InstaShowCase></InstaShowCase>
      </div>
    </StyledInstaPrd>
  );
};
