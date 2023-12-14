import { FC, ReactElement } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Main } from "./pages/Main";

export const enum ROUTER {
  MAIN = "/",
  HOME = "home",
  TEACHERS = "teachers",
  FAVORITE = "favorite",
}

const router = createBrowserRouter([
  {
    path: ROUTER.MAIN,
    element: <Main />,
    errorElement: <Navigate to={ROUTER.MAIN} />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import("pages/Home");
          return { Component: Home };
        },
      },
      {
        path: ROUTER.TEACHERS,
        async lazy() {
          let { Teachers } = await import("pages/Teachers");
          return { Component: Teachers };
        },
      },
      {
        path: ROUTER.FAVORITE,
        async lazy() {
          let { Favorites } = await import("pages/Favorites");
          return {
            Component: () => <PrivateRoute redirectTo={ROUTER.MAIN} component={<Favorites />} />,
          };
        },
      },
    ],
  },
]);

const App: FC = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
