import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/common/Button";
import { ContainerDiv, TitleH1, TitleSpan, TextP } from "./index";

import { ROUTER } from "../../../App";

const HeroLeft: FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <ContainerDiv>
      <TitleH1>
        Unlock your potential with the best <TitleSpan>language</TitleSpan> tutors
      </TitleH1>

      <TextP>
        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
        proficiency to new heights by connecting with highly qualified and experienced tutors.
      </TextP>

      <Button
        type="button"
        padding="16px 88px"
        onClick={(): void => navigate(`/${ROUTER.TEACHERS}`)}
      >
        Get started
      </Button>
    </ContainerDiv>
  );
};

export default HeroLeft;
