import { Img } from "../../layouts";
import PropTypes from "prop-types";

const Logo = () => {
  return <Img isLogo alt="logo of distributed" />;
};

export { Logo };

Logo.propTypes = {
  width: PropTypes.number,
};
