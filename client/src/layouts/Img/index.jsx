import { StyledImg } from "./style";
import logo_img from "../../assets/img/logo.svg";
import PropTypes from "prop-types";

const otherImage = {
  something: "something",
};

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
  isLogo,
}) => {
  return (
    <div>
      <StyledImg
        src={isLogo ? logo_img : otherImage[src]}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        margin={margin}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
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
  isLogo: PropTypes.bool,
};
