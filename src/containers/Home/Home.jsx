import { LayoutManager } from "components/LayoutManager";
import { Banner } from "components/Banner";
import { Brand } from "components/Brand/Brand";
import styled from "styled-components";
import { ShowCase } from "components/ShowCase";
import ShowCaseImg from "../../assets/image-category-1.svg";
import { Popular } from "components/Popular";
const StyledHome = styled(LayoutManager)`
  width: 100%;
  
`;

export const Home = () => {
  return (
    <StyledHome>
      <Banner></Banner>
      <Brand></Brand>
      <Popular></Popular>
      
    </StyledHome>
  );
};
