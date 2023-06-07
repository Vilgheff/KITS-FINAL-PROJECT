import styled from "styled-components";
import likeIcon from "../../assets/likeIcon.svg";
import searchIcon from "../../assets/searchIconHover.svg";
import shopIcon from "../../assets/ShopIconHover.svg"
import { Button } from "components/Button";
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
  .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    color: #f1f1f1;
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    padding: 15px 0px 15px 0px;
    text-align: center;
    display: flex;
  }
  :hover .overlay {
    opacity: 1;
  }
  .showcase-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 20px 0px 20px;
  }
  .right-icon{
    display: flex;
    flex-direction: row;
    gap: 26px;
  }
`;
export const ShowCase = ({
  type,
  quantity,
  imgSrc,
  width,
  height,
  isHot,
  isSale,
  bgSize,
  children,
  isShowCase,
  ...rest
}) => {
  return (
    <StyleShowCase
      type={type}
      quantity={quantity}
      imgSrc={imgSrc}
      width={width}
      height={height}
      isHot={isHot}
      isSale={isSale}
      bgSize={bgSize}
      isShowCase={isShowCase}
    >
      <img src={imgSrc} alt="" />
      {isHot && <div className="hot">Hot</div>}
      {isSale && <div className="sale">Sale</div>}
      <div className="overlay">
        {isShowCase && (
          <div className="showcase-title">
            <span>{type}</span>
            <span>{quantity} product</span>
          </div>
        )}
        {!isShowCase && (
          <div className="showcase-title">
            <div className="right-icon">
              <img src={likeIcon} alt="" />
              <img src={searchIcon} alt="" />
            </div>
            <Button icon={shopIcon} bgColor="transparent"  borderRadius="0px" textColor="white" width="fit-content" height="fit-content">Shop Now</Button>
          </div>
        )}
      </div>
    </StyleShowCase>
  );
};
