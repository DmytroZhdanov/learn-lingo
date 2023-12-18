import { FC, ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";

const Main: FC = (): ReactElement => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export { Main };
