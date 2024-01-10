import Icon from "components/common/Icon";
import { FC, ReactElement } from "react";
import { TReview } from "shared.types";
import { ListUl, NameH3, RatingP } from "./index";

type TReviewsProps = {
  reviews: TReview[];
};

const Reviews: FC<TReviewsProps> = ({ reviews }): ReactElement => {
  return (
    <ListUl>
      {reviews.map(
        (review: TReview, index): ReactElement => (
          <li key={index}>
            <NameH3>{review.reviewer_name}</NameH3>

            <RatingP>
              <Icon iconId="star" />
              {review.reviewer_rating.toFixed(1)}
            </RatingP>

            <p>{review.comment}</p>
          </li>
        )
      )}
    </ListUl>
  );
};

export default Reviews;
