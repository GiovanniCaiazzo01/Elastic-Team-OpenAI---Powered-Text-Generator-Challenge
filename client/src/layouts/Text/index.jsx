import { StyledText } from "./style";
import PropTypes from "prop-types";

const Text = ({
  fontWeight,
  fontSize,
  fontFamily,
  textAlign,
  color,
  children,
}) => {
  return (
    <StyledText
      fontWeight={fontWeight}
      fontSize={fontSize}
      fontFamily={fontFamily}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </StyledText>
  );
};

export { Text };

Text.propTypes = {
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  textAlign: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
};
