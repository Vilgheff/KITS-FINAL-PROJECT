import styled from "styled-components";
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
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
`;
export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  borderRadius,
  boderColor,
  fontSize,
  marginright,
  icon,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      icon={icon}
      marginright={marginright}
      {...rest}
    >
      <img src={icon} alt=""/>
      {children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "40px",
  fontSize: 16,
};
