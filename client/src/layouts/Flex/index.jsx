import { StyledFlex } from "./style";
import PropTypes from "prop-types";

const Flex = ({
  flexDirection,
  flexWrap,
  alignContent,
  justifyContent,
  alignItems,
  fullWidth,
  fullHeight,
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
  children,
}) => {
  return (
    <StyledFlex
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      alignContent={alignContent}
      justifyContent={justifyContent}
      alignItems={alignItems}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
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
    >
      {children}
    </StyledFlex>
  );
};

export { Flex };

Flex.propTypes = {
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.number,
  alignContent: PropTypes.number,
  justifyContent: PropTypes.number,
  alignItems: PropTypes.number,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
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
  children: PropTypes.node.isRequired,
};
