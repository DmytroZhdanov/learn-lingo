import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { ROUTER } from "../App";

type TPrivateRouteProps = {
  redirectTo: ROUTER;
  component: ReactElement;
};

const PrivateRoute: FC<TPrivateRouteProps> = ({
  redirectTo = ROUTER.MAIN,
  component: Component,
}): ReactElement => {
  const shouldRedirect: boolean = false;

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
};

export default PrivateRoute;
