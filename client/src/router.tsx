import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Publications from "./pages/Publications";
import Purpose from "./pages/Purpose";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "publications", element: <Publications /> },
      { path: "prizes", element: <Prizes /> },
      { path: "purpose", element: <Purpose /> },
      { path: "books", element: <Books /> },
    ],
  },
]);

export default router;
