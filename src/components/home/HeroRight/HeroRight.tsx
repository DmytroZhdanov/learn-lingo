import Icon from "components/common/Icon";
import { FC, ReactElement } from "react";

import {
  personPng,
  personPng2x,
  personPng3x,
  personWebp,
  personWebp2x,
  personWebp3x,
} from "../../../utils/person";
import { ContainerDiv, IMacDiv } from "./index";

const HeroRight: FC = (): ReactElement => {
  return (
    <ContainerDiv>
      <picture>
        <source
          srcSet={`${personWebp} 1x, ${personWebp2x} 2x, ${personWebp3x} 3x`}
          type="image/webp"
        />
        <source srcSet={`${personPng} 1x, ${personPng2x} 2x, ${personPng3x} 3x`} type="image/png" />
        <img src={personPng} alt="User emoji" />
      </picture>

      <IMacDiv>
        <Icon iconId="apple" />
        <svg>
          <linearGradient
            id="yellow"
            x1="23.5803"
            y1="0.269165"
            x2="23.5803"
            y2="56.0534"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FBE9BA" />
            <stop offset="1" stop-color="#E7C885" />
          </linearGradient>
        </svg>
      </IMacDiv>
    </ContainerDiv>
  );
};

export default HeroRight;
