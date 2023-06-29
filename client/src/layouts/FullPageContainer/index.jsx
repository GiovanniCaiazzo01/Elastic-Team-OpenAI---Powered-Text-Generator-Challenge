import { StyledFullPageContainer } from "./style";
import PropTypes from "prop-types";

const FullPageContainer = ({ children }) => {
  return <StyledFullPageContainer>{children}</StyledFullPageContainer>;
};

FullPageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FullPageContainer };
