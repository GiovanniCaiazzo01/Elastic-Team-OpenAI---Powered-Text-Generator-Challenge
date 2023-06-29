import { CenteredContainer, FullPageContainer } from "../../layouts";
import PropTypes from "prop-types";

const PublicRoute = ({ isCentered, component: Component }) => {
  return isCentered ? (
    <CenteredContainer>
      <Component />
    </CenteredContainer>
  ) : (
    <FullPageContainer>
      <Component />
    </FullPageContainer>
  );
};

export { PublicRoute };

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
};
