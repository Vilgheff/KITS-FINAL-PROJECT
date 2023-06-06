import { LayoutManager } from "components/LayoutManager";
import { Banner } from "components/Banner";
import { Brand } from "components/Brand/Brand";
import styled from "styled-components";
import { Popular } from "components/Popular";
import { NewSletter } from "components/NewSletter";
import { SeacondBanner } from "components/Banner/SeacondBanner";
const StyledHome = styled(LayoutManager)`
  width: 100%;
  
`;

export const Home = () => {
  return (
    <StyledHome>
      <Banner></Banner>
      <Brand></Brand>
      <Popular></Popular>
      <NewSletter></NewSletter>
      <SeacondBanner></SeacondBanner>
    </StyledHome>
  );
};
