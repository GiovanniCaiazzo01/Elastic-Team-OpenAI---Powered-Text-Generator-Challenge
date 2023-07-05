import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { CenteredContainer, FullPageContainer } from "../../layouts";
import PropTypes from "prop-types";
import { useEffect } from "react";

const PublicRoute = ({ isCentered, component: Component }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    token && navigate("/chat");
  }, [token]);

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
