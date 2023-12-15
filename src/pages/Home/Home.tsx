import { FC, ReactElement } from "react";
import HeroLeft from "../../components/home/HeroLeft";
import HeroRight from "../../components/home/HeroRight";
import Statistics from "../../components/home/Statistics";

const Home: FC = (): ReactElement => {
  return (
    <div>
      Home page
      <HeroLeft />
      <HeroRight />
      <Statistics />
    </div>
  );
};

export { Home };
