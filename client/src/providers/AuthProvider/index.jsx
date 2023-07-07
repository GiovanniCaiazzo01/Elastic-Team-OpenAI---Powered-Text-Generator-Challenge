import { useState, useEffect, createContext } from "react";
import HTTPClient from "../../api/HTTPClient";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const verifyToken = async (jwtToken) => {
    const isValidToken = await HTTPClient.verifyToken(jwtToken);
    if (!isValidToken) {
      localStorage.removeItem("token");
      setToken(() => "");
      return isValidToken;
    }
  };
  const setAuthToken = async (jwtToken) => {
    localStorage.setItem("token", jwtToken);
    setToken(() => jwtToken);
  };

  useEffect(() => {
    verifyToken(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setAuthToken, verifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
