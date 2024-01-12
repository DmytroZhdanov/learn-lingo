import { FC, ReactElement, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../../components/common/Header";
import Loader from "components/common/Loader";
import { BackgroundDiv } from "./index";

const Main: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <BackgroundDiv pathname={pathname}>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </BackgroundDiv>
  );
};

export { Main };
