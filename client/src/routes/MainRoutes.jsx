import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components";

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
      <Route exact path="/chat" element={<PublicRoute component={Chat} />} />
    </Routes>
  );
};

export default MainRoutes;
