import Button from "components/common/Button";
import { FC, ReactElement } from "react";
import { ContainerDiv, TitleH1, TitleSpan, TextP } from "./index";

const HeroLeft: FC = (): ReactElement => {
  return (
    <ContainerDiv>
      <TitleH1>
        Unlock your potential with the best <TitleSpan>language</TitleSpan> tutors
      </TitleH1>

      <TextP>
        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
        proficiency to new heights by connecting with highly qualified and experienced tutors.
      </TextP>

      <Button>Get started</Button>
    </ContainerDiv>
  );
};

export default HeroLeft;
