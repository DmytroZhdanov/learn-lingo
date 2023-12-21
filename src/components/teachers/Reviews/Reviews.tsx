import { FC, ReactElement } from "react";
import { TReview } from "../TeacherCard/TeacherCard";

type TReviewsProps = {
  reviews: TReview[];
};

const Reviews: FC<TReviewsProps> = ({ reviews }): ReactElement => {
  return (
    <ul>
      {reviews.map(
        (review: TReview): ReactElement => (
          <li>Review component</li>
        )
      )}
    </ul>
  );
};

export default Reviews;
