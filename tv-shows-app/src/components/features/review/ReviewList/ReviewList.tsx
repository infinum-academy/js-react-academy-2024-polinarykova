import { IReviewList } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import ReviewItem from "../ReviewItem/ReviewItem";

interface IReviewListProps {
  reviewList: IReviewList;
  onDelete: (id: number, reviewId: number) => void;
  onEdit: (rating: number, comment: string, review_id: number) => void;
}

export default function reviewList({
  reviewList,
  onDelete,
  onEdit,
}: IReviewListProps) {
  return (
    <Flex marginY={10} gap={3} direction="column">
      {reviewList.reviews.map((review, index) => {
        return (
          <ReviewItem
            review={review}
            key={index}
            onDelete={onDelete}
            onEdit={onEdit}
          ></ReviewItem>
        );
      })}
    </Flex>
  );
}
