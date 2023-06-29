import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CenteredContainer, FullPageContainer } from "../../layouts";
import PropTypes from "prop-types";

const PrivateRoute = ({ isCentered, component: Component }) => {
  const token = false;
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
  }, [token]);

  isCentered && token && (
    <CenteredContainer>
      <Component />
    </CenteredContainer>
  );

  token && (
    <FullPageContainer>
      <Component />
    </FullPageContainer>
  );
};

export { PrivateRoute };

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
};
