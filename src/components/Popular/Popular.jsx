import { ShowCase } from "components/ShowCase";
import styled from "styled-components";
import ShowCaseImg from "../../assets/image-category-1.svg";
const StylePopular = styled.div`
  position: relative;
  width: 70%;
  height: 648px;
  display: flex;
  .text-rotated {
    position: absolute;
    font-size: 34px;
    line-height: 40px;
    width: 648px;
    height: 52px;
    bottom: 0;
    left: -52px;
    background: none;
    transform-origin: 0 0;
    transform: rotate(270deg);
  }
  .showcasesmol {
    display: flex;
    width: 50%;
    gap: 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .showcasesmol-left , .showcasesmol-right{
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 24px;
  }
`;
export const Popular = () => {
  return (
    <StylePopular>
      <div className="text-rotated">Explore new and popular styles</div>
      <ShowCase imgSrc={ShowCaseImg} width="52%" bgSize="auto"></ShowCase>
      <div className="showcasesmol">
        <div className="showcasesmol-left">
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="312px"
            bgSize="cover"
          ></ShowCase>
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="312px"
            bgSize="cover"
          ></ShowCase>
        </div>
        <div className="showcasesmol-right">
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="312px"
            bgSize="cover"
          ></ShowCase>
          <ShowCase
            imgSrc={ShowCaseImg}
            width="100%"
            height="312px"
            bgSize="cover"
          ></ShowCase>
        </div>
      </div>
    </StylePopular>
  );
};
