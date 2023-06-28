import { StyledImg } from "./style";
import PropTypes from "prop-types";

const Img = ({
  src,
  alt,
  width,
  height,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  cursorPointer,
}) => {
  return (
    <div>
      <StyledImg
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        cursorPointer={cursorPointer}
      />
    </div>
  );
};

export { Img };

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  cursorPointer: PropTypes.bool,
};
