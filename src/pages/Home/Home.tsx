import { FC, ReactElement } from "react";

import HeroLeft from "../../components/home/HeroLeft";
import HeroRight from "../../components/home/HeroRight";
import Statistics from "../../components/home/Statistics";
import { ContainerDiv } from "./index";

const Home: FC = (): ReactElement => {
  return (
    <ContainerDiv>
      <HeroLeft />
      <HeroRight />
      <Statistics />
    </ContainerDiv>
  );
};

export { Home };
