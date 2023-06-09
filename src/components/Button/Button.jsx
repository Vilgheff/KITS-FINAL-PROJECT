import styled from "styled-components";
const StyledButton = styled.button`
  
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  margin-right: ${(props) => props.marginright};
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  cursor: pointer;
  img {
    margin-right: 0px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  :hover{
    background-color: ${(props)=>props.bgColor !== "transparent" ? `#FF6F61` : props.bgColor };
    color: ${(props)=>props.bgColor === "transparent" ? `#FF6F61` : props.textColor }
  }
`;
export const Button = ({
  width,
  height,
  textColor,
  textColorHover,
  bgColor,
  bgColorHover,
  borderRadius,
  boderColor,
  fontSize,
  marginright,
  icon,
  onClick,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      textColorHover={textColorHover}
      bgColor={bgColor}
      bgColorHover={bgColorHover}
      boderColor={boderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      icon={icon}
      marginright={marginright}
      onClick={onClick}
    >
      <img src={icon} alt="" />
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "transparent"
};