import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
]);
