import { StyledText } from "./style";
import PropTypes from "prop-types";

const Text = ({
  fontWeight,
  fontSize,
  fontFamily,
  textAlign,
  lineHeight,
  color,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  children,
}) => {
  return (
    <StyledText
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontFamily={fontFamily}
      textAlign={textAlign}
      lineHeight={lineHeight}
      color={color}
      margin={margin}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </StyledText>
  );
};

export { Text };

Text.propTypes = {
  fontWeight: PropTypes.number,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  textAlign: PropTypes.number,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  children: PropTypes.node,
};
