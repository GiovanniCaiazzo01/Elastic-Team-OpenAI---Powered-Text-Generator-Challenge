import { PageLayout } from "../PageLayout";
import PropTypes from "prop-types";

const PublicRoute = ({ isCentered, component: Component }) => {
  return isCentered ? (
    <PageLayout>
      <Component />
    </PageLayout>
  ) : (
    <Component />
  );
};

export { PublicRoute };

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
};
