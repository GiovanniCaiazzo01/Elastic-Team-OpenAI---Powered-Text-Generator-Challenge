import { Img } from "../../layouts";
import svgLogo from "../../assets/img/logo.svg";
import PropTypes from "prop-types";

const Logo = () => {
  return <Img alt="logo of distributed" marginRight={9} src={svgLogo} />;
};

export { Logo };

Logo.propTypes = {
  width: PropTypes.number,
};
