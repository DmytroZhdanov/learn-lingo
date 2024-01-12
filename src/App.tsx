import { FC, ReactElement, useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { Main } from "./pages/Main";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "components/common/Loader";

import { loader as teachersLoader } from "./pages/Teachers";

import { selectRefreshToken } from "./redux/auth/selectors";
import { IError, useGetIdTokenMutation, useGetUserDataMutation } from "./redux/api";
import { initialState, setCredentials } from "./redux/auth/authSlice";
import { clearFavorite } from "./redux/favorite/favoriteSlice";

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
        loader: teachersLoader,
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
  const dispatch = useDispatch();
  const [
    getIdToken,
    { isLoading: isIdTokenLoading, isError: isIdTokenError, error: idTokenError },
  ] = useGetIdTokenMutation();
  const [
    getUserData,
    { isLoading: isUserDataLoading, isError: isUserDataError, error: userDataError },
  ] = useGetUserDataMutation();

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      if (refreshToken) {
        const { id_token } = await getIdToken(refreshToken).unwrap();
        const { users } = await getUserData(id_token).unwrap();

        const { displayName, email } = users[0];
        const user = { displayName, email };

        dispatch(setCredentials({ user, idToken: id_token, refreshToken }));
      } else {
        dispatch(clearFavorite());
      }
    };

    refresh();
  }, [refreshToken]);

  useEffect(() => {
    let error;

    if (isIdTokenError) {
      error = idTokenError as IError;
    } else if (isUserDataError) {
      error = userDataError as IError;
    }

    if (isUserDataError || isIdTokenError) {
      Notify.failure(error?.data.error.message);
      dispatch(setCredentials(initialState));
    }
  }, [isIdTokenError, isUserDataError]);

  return (
    <>
      <RouterProvider router={router} />

      {(isIdTokenLoading || isUserDataLoading) && <Loader />}
    </>
  );
};

export default App;
