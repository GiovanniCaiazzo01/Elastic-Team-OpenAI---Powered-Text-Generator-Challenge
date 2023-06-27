import { Img } from "../../layouts";
import PropTypes from "prop-types";

const Logo = () => {
  return <Img isLogo alt="logo of distributed" marginRight={9} />;
};

export { Logo };

Logo.propTypes = {
  width: PropTypes.number,
};
