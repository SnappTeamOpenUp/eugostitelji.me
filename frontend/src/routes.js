import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { useAccount } from "./components/Accounts";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewService } from "./pages/NewService";
import { Signup } from "./pages/Signup";
import NotFoundPage from "./pages/404";
import AboutUs from "./pages/AboutUs";
import ServiceProvider from "./pages/ServiceProvider";

export const PrivateRoute = ({ render, ...rest }) => {
  let { loggedIn } = useAccount();

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const RouteWithSubRoutes = (route) => {
  return route.permissions ? (
    <PrivateRoute
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  ) : (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <NotFoundPage />} />
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
      { path: "/about-us", key: "ABOUT", exact: true, component: AboutUs },
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
      {
        path: "/service-provider/:id",
        key: "SERVICE_PROVIDER",
        exact: true,
        component: ServiceProvider,
      },
    ],
  },
];

export default ROUTES;
