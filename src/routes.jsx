import { createBrowserRouter } from "react-router-dom";
import { HomePage, loader as loaderHomePage } from "./Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <HomePage />,
    loader: loaderHomePage,
    // children: [
    //   {
    //     path: "search", // Ruta secundaria (sin barra inicial)
    //     element: <div>Hi</div>,
    //   },
    // ],
  },
  {
    path: "/search/:where?/:arrival?/:departure?/:count?", // Ruta secundaria (sin barra inicial)
    element: <div>Hi</div>,
  },
]);

export default router;
// Al utilizar una ruta secundaría esta se renderizara despues de outlet
