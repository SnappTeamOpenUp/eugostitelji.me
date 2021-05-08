import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AccountContext } from "./components/Accounts";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewService } from "./pages/NewService";
import { Signup } from "./pages/Signup";

export const RenderRoutes = ({ routes }) => {
  const { loggedIn } = useContext(AccountContext);

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
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    permissions: true,
    routes: [
      {
        path: "/app/dashboard",
        key: "APP_DASH",
        exact: true,
        component: Dashboard,
      },
      {
        path: "/app/new-service",
        key: "APP_SERVICE",
        exact: true,
        component: NewService,
      },
    ],
  },
  {
    path: "/",
    key: "ROOT",
    component: RenderRoutes,
    routes: [
      { path: "/", key: "HOME", exact: true, component: Home },
      {
        path: "/login",
        key: "APP_LOGIN",
        exact: true,
        component: Login,
      },
      {
        path: "/signup",
        key: "APP_SIGNUP",
        exact: true,
        component: Signup,
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
