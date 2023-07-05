import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FullPageContainer } from "../../layouts";
import PropTypes from "prop-types";
import { useAuth } from "../../hooks";

const PrivateRoute = ({ component: Component }) => {
  const { token, verifyToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
    verifyToken(token);
  }, [token]);

  return (
    token && (
      <FullPageContainer>
        <Component />
      </FullPageContainer>
    )
  );
};

export { PrivateRoute };

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
};
