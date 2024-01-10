import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRefreshToken } from "../redux/auth/selectors";

import { ROUTER } from "../App";

type TPrivateRouteProps = {
  redirectTo: ROUTER;
  component: ReactElement;
};

const PrivateRoute: FC<TPrivateRouteProps> = ({
  redirectTo = ROUTER.MAIN,
  component: Component,
}): ReactElement => {
  const refreshToken = useSelector(selectRefreshToken);
  const shouldRedirect: boolean = !refreshToken;

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
};

export default PrivateRoute;
