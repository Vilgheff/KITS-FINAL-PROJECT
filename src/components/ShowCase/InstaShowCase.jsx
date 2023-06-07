import styled from "styled-components";
import InsShow from "../../assets/InstaPrd.svg";
import InsImg from "../../assets/InstaIconHover.svg";
const StyleInstaShowCase = styled.div`
  position: relative;
  cursor: pointer;
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  :hover .image {
    opacity: 0.3;
  }
  :hover .middle {
    opacity: 1;
  }
  .hover-img{
    width: 25%;
    height: 100%;
  }
`;
export const InstaShowCase = () => {
  return (
    <StyleInstaShowCase>
      <img src={InsShow} alt="" className="image" />
      <div className="middle">
        <img src={InsImg} alt="" className="hover-img" />
      </div>
    </StyleInstaShowCase>
  );
};
