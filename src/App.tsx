import { FC, ReactElement, useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Main } from "./pages/Main";
import PrivateRoute from "./components/PrivateRoute";

import { selectRefreshToken } from "./redux/auth/selectors";
import { useGetIdTokenMutation, useGetUserDataMutation } from "./redux/api";
import { setCredentials } from "./redux/auth/authSlice";

export const enum ROUTER {
  MAIN = "/",
  HOME = "home",
  TEACHERS = "teachers",
  FAVORITES = "favorites",
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
          let { Home } = await import("./pages/Home");
          return { Component: Home };
        },
      },
      {
        path: ROUTER.TEACHERS,
        async lazy() {
          let { Teachers } = await import("./pages/Teachers");
          return { Component: Teachers };
        },
      },
      {
        path: ROUTER.FAVORITES,
        async lazy() {
          let { Favorites } = await import("./pages/Favorites");
          return {
            Component: () => <PrivateRoute redirectTo={ROUTER.MAIN} component={<Favorites />} />,
          };
        },
      },
    ],
  },
]);

const App: FC = (): ReactElement => {
  const refreshToken = useSelector(selectRefreshToken);
  const [getIdToken, status] = useGetIdTokenMutation();
  const [getUserData, userDataStatus] = useGetUserDataMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      if (refreshToken) {
        const { id_token } = await getIdToken(refreshToken).unwrap();
        const { users } = await getUserData(id_token).unwrap();

        const { displayName, email } = users[0];
        const user = { displayName, email };

        dispatch(setCredentials({ user, idToken: id_token, refreshToken }));
      }
    };

    refresh();
  }, [refreshToken]);

  return <RouterProvider router={router} />;
};

export default App;
