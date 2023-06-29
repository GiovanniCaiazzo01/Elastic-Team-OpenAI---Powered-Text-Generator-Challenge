import PropTypes from "prop-types";
import { StyledInput } from "./style";
import { Flex, Img } from "../";
const Input = ({
  fullWidth,
  width,
  maxWidth,
  height,
  maxHeight,
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
  placeholder,
  extra,
  name,
  type,
  onChange,
}) => {
  return (
    <Flex fullWidth justifyContent={1} alignItems={1}>
      <StyledInput
        fullWidth={fullWidth}
        width={width}
        maxWidth={maxWidth}
        height={height}
        maxHeight={maxHeight}
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
        placeholder={placeholder}
        extra={extra}
        name={name}
        type={type}
        onChange={(e) => onChange(e)}
      />
      <Img src={extra} marginLeft={6} marginRight={7} cursorPointer />
    </Flex>
  );
};

export { Input };

Input.propTypes = {
  fullWidth: PropTypes.bool,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
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
  placeholder: PropTypes.string,
  extra: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
