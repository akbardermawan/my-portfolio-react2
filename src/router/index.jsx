import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Porfolio from "../pages/Porfolio";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/portfolio",
    element: <Porfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
