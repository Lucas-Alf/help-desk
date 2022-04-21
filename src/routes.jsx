import React from "react";
import Home from "./pages/home";
import Search from "./pages/search";
import Add from "./pages/add";
import View from "./pages/view";

const routes = [
  { path: "/", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "search", element: <Search /> },
  { path: "add", element: <Add /> },
  { path: "view", element: <View /> },
];

export default routes;
