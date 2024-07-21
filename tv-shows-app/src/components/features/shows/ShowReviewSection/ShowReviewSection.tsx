import ReviewForm from "../../../shared/ReviewForm/ReviewForm";
import { Heading } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import { useHandleReviews } from "./ShowReviewSections.utils";
import useId from "@/hooks/useId";

export default function ShowReviewSection() {
  const id = useId();

  const { data, onAdd } = useHandleReviews(id || "");

  return (
    <>
      <Heading size="lg" marginY={5}>
        Reviews
      </Heading>
      <ReviewForm onAdd={onAdd} editing={false} />
      <ReviewList reviewList={data || { reviews: [] }} />
    </>
  );
}
