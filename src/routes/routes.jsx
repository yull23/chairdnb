import { createBrowserRouter } from "react-router-dom";
import { HomePage, loader as loaderHomePage } from "./Pages/HomePage/HomePage";
import {
  SearchPage,
  loader as loaderSearchPage,
} from "./Pages/SearchPage/SearchPage";
// import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: loaderHomePage,
    children: [
      {
        path: "/children_1/",
        element: <div>Hi CHildren</div>,
      },
    ],
  },
  {
    path: "/search",
    loader: loaderSearchPage,
    element: <SearchPage />,
  },
]);

export default router;
