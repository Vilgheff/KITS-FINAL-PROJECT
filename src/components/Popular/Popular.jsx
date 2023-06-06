import { ShowCase } from "components/ShowCase";
import styled from "styled-components";
import ShowCaseImg from "../../assets/image-category-1.svg";
const StylePopular = styled.div`
  position: relative;
  width: 70%;
  max-height: 648px;
  height: auto;
  display: flex;
  align-items: center;
  gap: 24px;
  .text-rotated {
    position: absolute;
    font-size: 1.77vw;
    line-height: 40px;
    width: auto;
    max-width: 574px;
    height: 52px;
    bottom: 0px;
    left: -52px;
    background: transparent;
    transform-origin: 0px 0px;
    transform: rotate(270deg);
    text-transform: uppercase;
    text-align: right;
  }
  .showcasesmol {
    display: flex;
    width: 50%;
    gap: 24px;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
  .showcasesmol-left,
  .showcasesmol-right {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 24px;
    justify-content: flex-start;
  }
`;
export const Popular = () => {
  return (
    <StylePopular>
      <div className="text-rotated">Explore new and popular styles</div>
      <ShowCase
        imgSrc={ShowCaseImg}
        width="52%"
        height="100%"
        bgSize="auto"
        isHot={true}
        isSale={true}
      ></ShowCase>
      <div className="showcasesmol">
        <div className="showcasesmol-left">
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="auto"
            bgSize="cover"
          ></ShowCase>
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="auto"
            bgSize="cover"
            isHot={true}
          ></ShowCase>
        </div>
        <div className="showcasesmol-right">
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="auto"
            bgSize="cover"
            isSale={true}
          ></ShowCase>
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="auto"
            bgSize="cover"
          ></ShowCase>
        </div>
      </div>
    </StylePopular>
  );
};
