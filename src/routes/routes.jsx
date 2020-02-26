import { lazy } from "react";

const asyncHome = lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);

const asyncMoviesDetailsPage = lazy(() =>
  import(
    "../pages/MoviesDetailsPage/MoviesDetailsPage" /* webpackChunkName: "asyncMoviesDetailsPage"  */
  )
);
const asyncMoviesPage = lazy(() =>
  import(
    "../pages/MoviesPage/MoviesPage" /* webpackChunkName: "asyncMoviesPage"  */
  )
);

export default {
  HOME_PAGE: {
    path: "/",
    component: asyncHome
  },
  MOVIE_DETAILS_PAGE: {
    path: "/movie/:moviId",
    component: asyncMoviesDetailsPage
  },
  MOVIES_PAGE: {
    path: "/movie",
    component: asyncMoviesPage
  }
};
