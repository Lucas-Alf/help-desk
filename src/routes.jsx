import React from "react";
import Home from "./pages/home";
import Search from "./pages/search";
import Add from "./pages/add";
import Update from "./pages/update";
import View from "./pages/view";

const routes = [
  { path: "/", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "search", element: <Search /> },
  { path: "add", element: <Add /> },
  { path: "view", element: <View /> },
  { path: "update", element: <Update /> },
];

export default routes;
