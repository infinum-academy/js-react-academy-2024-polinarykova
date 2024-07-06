import ReviewForm from "./ReviewForm";
import { Heading } from "@chakra-ui/react";
import ReviewList from "../review/ReviewList";
import { IReview, IReviewList } from "@/typings/review";

interface IShowReviewSectionProps {
  reviewList: IReviewList;
  addShowReview: (review: IReview) => void;
  deleteShowReview: (review: IReview) => void;
}

export default function ({
  reviewList,
  addShowReview,
  deleteShowReview,
}: IShowReviewSectionProps) {
  return (
    <>
      <Heading size="lg" color="white" marginY={5}>
        Reviews
      </Heading>
      <ReviewForm onAdd={addShowReview} />
      <ReviewList reviewList={reviewList} onDeleteReview={deleteShowReview} />
    </>
  );
}
