import { IReviewList } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import ReviewItem from "../ReviewItem/ReviewItem";
interface IReviewListProps {
  reviewList: IReviewList;
}

export default function reviewList({ reviewList }: IReviewListProps) {
  return (
    <Flex marginY={10} gap={3} direction="column">
      {reviewList.reviews.map((review, index) => {
        return <ReviewItem review={review} key={index}></ReviewItem>;
      })}
    </Flex>
  );
}
