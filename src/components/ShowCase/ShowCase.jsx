import styled from "styled-components";
const StyleShowCase = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  .sale,
  .hot {
    position: absolute;
    color: white;
    width: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    margin: 10px 0px;
  }
  .sale {
    background-color: black;
    top: ${(props) => (!props.isHot ? "0px" : "5%")};
  }
  .hot {
    background-color: #ff6f61;
    top: ${(props) => (!props.isSale ? "0px" : "10%")};
  }
  img {
    display: block;
    max-width: 648px;
    max-height: 648px;
    width: auto;
    height: auto;
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
      bgSize={bgSize}
    >
      <img src={imgSrc} alt="" />
      {isHot && <div className="hot">Hot</div>}
      {isSale && <div className="sale">Sale</div>}
    </StyleShowCase>
  );
};
