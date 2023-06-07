import styled from "styled-components";
import Brand_1 from "../../assets/brand-1.svg";
import Brand_2 from "../../assets/brand-2.svg";
import Brand_3 from "../../assets/brand-3.svg";
import Brand_4 from "../../assets/brand-4.svg";
import Brand_5 from "../../assets/brand-5.svg";
const StyledBrand = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 90px 0px;
  gap: 80px;
  img{
    width: auto;
    height: auto;
  }
`;
export const Brand = () => {
  return (
    <StyledBrand>
      <img src={Brand_1} alt="" />
      <img src={Brand_2} alt="" />
      <img src={Brand_3} alt="" />
      <img src={Brand_4} alt="" />
      <img src={Brand_5} alt="" />
    </StyledBrand>
  );
};
