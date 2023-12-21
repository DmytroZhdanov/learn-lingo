import { FC, ReactElement } from "react";
import { ListUl, ItemLi, Span } from "./index";

const Statistics: FC = (): ReactElement => {
  return (
    <ListUl>
      <ItemLi>
        <Span>32,000 +</Span>

        <p>
          Experienced
          <br /> tutors
        </p>
      </ItemLi>

      <ItemLi>
        <Span>300,000 +</Span>

        <p>
          5-star tutor
          <br /> reviews
        </p>
      </ItemLi>

      <ItemLi>
        <Span>120 +</Span>

        <p>
          Subjects
          <br /> taught
        </p>
      </ItemLi>

      <ItemLi>
        <Span>200 +</Span>

        <p>
          Tutor
          <br /> nationalities
        </p>
      </ItemLi>
    </ListUl>
  );
};

export default Statistics;
