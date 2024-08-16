import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Forms from "../pages/Forms";
import Lists from "../pages/Lists";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Forms />,
    },
    {
      path: "/lists",
      element: <Lists />,
    },
  ]);
  return <RouterProvider router={router} />;
}
