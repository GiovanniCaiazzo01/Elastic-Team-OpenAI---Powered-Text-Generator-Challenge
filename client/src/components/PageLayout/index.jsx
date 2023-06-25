import { CenteredContainer } from "../../layouts";
import PropTypes from "prop-types";

const PageLayout = ({ children }) => {
  return <CenteredContainer>{children}</CenteredContainer>;
};

export { PageLayout };

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
