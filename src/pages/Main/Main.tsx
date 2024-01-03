import { FC, ReactElement, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/common/Header";
import { BackgroundDiv } from "./index";

const Main: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <BackgroundDiv pathname={pathname}>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </BackgroundDiv>
  );
};

export { Main };
