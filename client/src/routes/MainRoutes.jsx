import loadable from "@loadable/component";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../components";

const Login = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Login,
});

const Register = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Register,
});

const Chat = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Chat,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace />} />
      <Route
        exact
        path="/login"
        element={<PublicRoute isCentered component={Login} />}
      />
      <Route
        exact
        path="/register"
        element={<PublicRoute isCentered component={Register} />}
      />
      <Route exact path="/chat" element={<PrivateRoute component={Chat} />} />
    </Routes>
  );
};

export default MainRoutes;
