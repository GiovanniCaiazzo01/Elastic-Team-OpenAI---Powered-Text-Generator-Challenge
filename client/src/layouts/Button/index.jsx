import { StyledButton } from "./style";
import PropTypes from "prop-types";

const Button = ({
  color,
  backgroundColor,
  borderRadius,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  disabled,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      margin={margin}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      disabled={disabled}
      onClick={(e) => onClick(e)}
    >
      {children}
    </StyledButton>
  );
};

export { Button };

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  padding: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  margin: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
