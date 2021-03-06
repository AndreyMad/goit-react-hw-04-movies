/* eslint-disable import/extensions */
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes/routes.jsx";
import Navigation from "../pages/Navigation/Navigation";
import Loader from "./Loader/Loader";

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={routes.HOME_PAGE.path}
            exact
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.MOVIE_DETAILS_PAGE.path}
            component={routes.MOVIE_DETAILS_PAGE.component}
          />
          <Route
            path={routes.MOVIES_PAGE.path}
            component={routes.MOVIES_PAGE.component}
          />
          <Redirect to={routes.HOME_PAGE.path} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
