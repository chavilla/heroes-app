import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { LoginScreen } from "../login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { AuthContext } from "../auth/AuthContext";
import PublicRoutes from "./PublicRoutes";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            exact
            path="/login"
            component={LoginScreen}
            isAuth={logged}
          />
          <PrivateRoutes path="/" component={DashboardRoutes} isAuth={logged} />
        </Switch>
      </div>
    </Router>
  );
};
