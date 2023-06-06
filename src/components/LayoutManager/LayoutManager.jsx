import { Header } from "components/Header";
import styled from "styled-components";
const LayoutStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 6110px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
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
    </LayoutStyled>
  );
};
