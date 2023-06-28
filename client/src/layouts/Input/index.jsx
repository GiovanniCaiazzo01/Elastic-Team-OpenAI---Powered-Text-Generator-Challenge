import PropTypes from "prop-types";
import { StyledInput } from "./style";

const Input = ({
  fullWidth,
  width,
  maxWidth,
  height,
  maxHeight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  color,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  borderRadius,
  backgroundColor,
  type,
}) => {
  return (
    <StyledInput
      fullWidth={fullWidth}
      width={width}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      color={color}
      border={border}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      type={type}
    />
  );
};

export { Input };

Input.propTypes = {
  fullWidth: PropTypes.bool,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  color: PropTypes.string,
  border: PropTypes.object,
  borderTop: PropTypes.object,
  borderBottom: PropTypes.object,
  borderLeft: PropTypes.object,
  borderRight: PropTypes.object,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  type: PropTypes.string.isRequired,
};
