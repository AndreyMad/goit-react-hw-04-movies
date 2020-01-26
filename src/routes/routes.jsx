/* eslint-disable import/extensions */
import HomePage from "../pages/HomePage/HomePage.jsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import ShowDetailsPage from "../pages/ShowDetailsPage/ShowDetailsPage";

export default {
  HOME_PAGE: {
    path: "/",
    component: HomePage
  },
  MOVIE_PAGE: {
    path: "/movie",
    component: MoviesPage
  }
};
