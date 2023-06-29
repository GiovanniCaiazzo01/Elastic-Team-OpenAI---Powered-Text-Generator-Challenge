import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FullPageContainer } from "../../layouts";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component }) => {
  const token = true;
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
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
