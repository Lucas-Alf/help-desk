import Home from "./pages/home";
import Search from "./pages/search";

const routes = [
  { path: "/", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "search", element: <Search /> },
];

export default routes;
