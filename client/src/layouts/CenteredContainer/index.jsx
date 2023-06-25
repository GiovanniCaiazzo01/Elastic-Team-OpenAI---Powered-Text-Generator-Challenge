import { StyledCenteredContainer } from "./style";
import PropTypes from "prop-types";

const CenteredContainer = ({ children }) => {
  return <StyledCenteredContainer>{children}</StyledCenteredContainer>;
};

export { CenteredContainer };

CenteredContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
