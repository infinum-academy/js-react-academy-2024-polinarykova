import ReviewForm from "../ReviewForm/ReviewForm";
import { Heading } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import { useHandleReviews } from "./ShowReviewSections.utils";
import { usePathname } from "next/navigation";

export default function ShowReviewSection() {
  const path = usePathname();
  const id = path?.split("/")[2];

  const { reviewList, onAdd, onDelete, onEdit } = useHandleReviews(id || "");

  return (
    <>
      <Heading size="lg" color="white" marginY={5}>
        Reviews
      </Heading>
      <ReviewForm onAdd={onAdd} editing={false} />
      <ReviewList reviewList={reviewList} onDelete={onDelete} onEdit={onEdit} />
    </>
  );
}
