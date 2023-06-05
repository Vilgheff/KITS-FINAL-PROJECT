import styled from "styled-components";
import ShowCaseImg from "../../assets/image-category-1.svg";
const StyleShowCase = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  .sale,
  .hot {
    color: white;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    margin: 10px 0px;
  }
  .sale {
    background-color: black;
  }
  .hot {
    background-color: #ff6f61;
  }
`;
export const ShowCase = ({
  imgSrc,
  width,
  height,
  isHot,
  isSale,
  bgSize,
  children,
  ...rest
}) => {
  return (
    <StyleShowCase
      imgSrc={imgSrc}
      width={width}
      height={height}
      isHot={isHot}
      isSale={isSale}
      bgSize = {bgSize}
    >
      {isHot && <span className="hot">Hot</span>}
      {isSale && <span className="sale">Sale</span>}
    </StyleShowCase>
  );
};
