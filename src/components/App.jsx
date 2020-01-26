/* eslint-disable import/extensions */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes/routes.jsx";
import Navigation from "../pages/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route
          path={routes.HOME_PAGE.path}
          exact
          component={routes.HOME_PAGE.component}
        />
        <Route
          path={routes.MOVIE_PAGE.path}
          exact
          component={routes.MOVIE_PAGE.component}
        />
        <Redirect to={routes.HOME_PAGE.path} />
      </Switch>
    </div>
  );
}

export default App;
