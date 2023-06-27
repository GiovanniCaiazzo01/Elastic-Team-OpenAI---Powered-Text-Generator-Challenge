import { Text } from "../Text";
import { StyledLink } from "./style";
import PropTypes from "prop-types";

const Link = ({
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
    <StyledLink
      margin={margin}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Text
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontFamily={fontFamily}
        textAlign={textAlign}
        lineHeight={lineHeight}
        color={color}
      >
        {children}
      </Text>
    </StyledLink>
  );
};

export { Link };

Link.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.number,
  fontSize: PropTypes.number,
  textAlign: PropTypes.number,
  lineHeight: PropTypes.number,
  margin: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  children: PropTypes.node.isRequired,
};
