import { StyledContainer } from "./style";
import PropTypes from "prop-types";

const Container = ({
  width,
  maxWidth,
  fullWidth,
  height,
  backgroundColor,
  borderRadius,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
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
  position,
  top,
  left,
  right,
  bottom,

  children,
}) => {
  return (
    <StyledContainer
      width={width}
      maxWidth={maxWidth}
      height={height}
      fullWidth={fullWidth}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
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
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
    >
      {children}
    </StyledContainer>
  );
};

export { Container };

Container.propTypes = {
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  fullWidth: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  border: PropTypes.object,
  borderTop: PropTypes.object,
  borderBottom: PropTypes.object,
  borderLeft: PropTypes.object,
  borderRight: PropTypes.object,
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
  position: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  children: PropTypes.node.isRequired,
};
