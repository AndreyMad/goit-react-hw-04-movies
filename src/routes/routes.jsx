import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage/MoviesDetailsPage";

export default {
  HOME_PAGE: {
    path: "/",
    component: HomePage
  },
  MOVIE_DETAILS_PAGE: {
    path: "/movie/:moviId",
    component: MoviesDetailsPage
  },
  MOVIES_PAGE: {
    path: "/movie",
    component: MoviesPage
  }
};
