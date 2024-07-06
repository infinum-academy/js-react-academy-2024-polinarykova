import { IReview, IReviewList } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import ReviewItem from "./ReviewItem";

interface IReviewListProps {
  reviewList: IReviewList;
  onDeleteReview: (review: IReview) => void;
}

export default function ({ reviewList, onDeleteReview }: IReviewListProps) {
  return (
    <>
      <Flex marginY={10} gap={3} direction="column">
        {reviewList.reviews.map((review, index) => {
          return (
            <>
              <ReviewItem
                review={review}
                key={index}
                onDelete={onDeleteReview}
              ></ReviewItem>
            </>
          );
        })}
      </Flex>
    </>
  );
}
