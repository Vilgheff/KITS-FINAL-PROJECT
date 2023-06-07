import { Footer } from "components/Footer";
import { Header } from "components/Header";
import styled from "styled-components";
const LayoutStyled = styled.div`
  position: relative;
  width: 100%;
  height: 6110px;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Contents = styled.div`
  width: 100%;
  height: 5514px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LayoutManager = ({ children }) => {
  return (
    <LayoutStyled>
      <Header>Lisa Store</Header>
      <Contents>{children}</Contents>
      <Footer></Footer>
    </LayoutStyled>
  );
};
