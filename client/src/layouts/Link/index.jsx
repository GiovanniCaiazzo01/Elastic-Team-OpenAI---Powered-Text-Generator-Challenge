import { Text } from "../Text";
import PropTypes from "prop-types";

import { Link as Reactlink } from "react-router-dom";

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
  href,
  children,
}) => {
  return (
    <Reactlink to={href}>
      <Text
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
      </Text>
    </Reactlink>
  );
};

export { Link };

Link.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
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
