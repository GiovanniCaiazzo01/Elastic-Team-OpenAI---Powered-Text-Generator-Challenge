import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components";

const Login = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Login,
});

const Register = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.Register,
});

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<PublicRoute component={Login} />} />
      <Route
        exact
        path="/register"
        element={<PublicRoute isCentered component={Register} />}
      />
    </Routes>
  );
};

export default MainRoutes;
