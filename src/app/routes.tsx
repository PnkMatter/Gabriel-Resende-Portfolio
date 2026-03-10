import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />, // Agora o TypeScript entende que isso é JSX
  },
  {
    path: "*",
    element: <Home />,
  },
]);
