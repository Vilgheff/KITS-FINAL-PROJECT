import { Header } from "components/Header";
import styled from "styled-components";
const Containter = styled.div`
  position: relative;
  width: 100%;
  height: 6110px;
  display: flex;
  background: #e5e5e5;
  background-size: 400% 400%;
  justify-content: center;
`;
const LayoutStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 6110px;
  background: #ffffff;
  display: flex;
  justify-content: center;
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
