import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Popular from "../pages/Popular/Popular";
import TopRated from "../pages/TopRated/TopRated";
import Upcoming from "../pages/Upcoming/Upcoming";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/toprated",
        element: <TopRated />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
