import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AccountContext } from "./components/Accounts";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const RenderRoutes = ({ routes }) => {
  const { loggedIn } = useContext(AccountContext);
  console.log(loggedIn);
  return (
    <Switch>
      {routes
        .filter((item) => !item.permissions || (item.permissions && loggedIn))
        .map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Home },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app/login",
        key: "APP_LOGIN",
        exact: true,
        component: Login,
      },
      {
        path: "/app/signup",
        key: "APP_SIGNUP",
        exact: true,
        component: Signup,
      },
    ],
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    component: RenderRoutes,
    permissions: true,
    routes: [
      {
        path: "/dashboard",
        key: "DASH_HOME",
        exact: true,
        component: Dashboard,
      },
    ],
  },
];

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default ROUTES;
