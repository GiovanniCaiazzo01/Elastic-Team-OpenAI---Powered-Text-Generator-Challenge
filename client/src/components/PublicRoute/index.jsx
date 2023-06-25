import { PageLayout } from "../PageLayout";
import PropTypes from "prop-types";

const PublicRoute = ({ isCentered, component: Component }) => {
  console.log(isCentered);
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
  component: PropTypes.element,
  isCentered: PropTypes.bool,
};
