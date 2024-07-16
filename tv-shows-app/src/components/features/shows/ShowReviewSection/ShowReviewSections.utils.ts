import {
  deleteAuthorizedMutator,
  getAuthorizedMutator,
  patchMutator,
  postAuthorizedMutator,
} from "@/app/fetchers/mutators";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { IReviewFormInputs, IReviewList } from "@/typings/review";
import { useState, useEffect } from "react";
import useSWRMutation from "swr/mutation";

export function useHandleReviews(id: string) {
  const [reviewList, setReviewList] = useState<IReviewList>({ reviews: [] });

  const { trigger: triggerLoadReviews } = useSWRMutation(
    swrKeys.load_reviews(id),
    getAuthorizedMutator,
    {
      onSuccess: (data: IReviewList) => {
        setReviewList(data);
      },
    }
  );

  const { trigger: triggerAddReview } = useSWRMutation(
    swrKeys.add_review,
    postAuthorizedMutator,
    {
      onSuccess: () => {
        triggerLoadReviews();
      },
    }
  );

  const { trigger: triggerDeleteReview } = useSWRMutation(
    `${swrKeys.delete_review}`,
    deleteAuthorizedMutator,
    {
      onSuccess: () => {
        triggerLoadReviews();
      },
    }
  );

  const { trigger: triggerEditReview } = useSWRMutation(
    swrKeys.add_review,
    patchMutator,
    {
      onSuccess: () => {
        triggerLoadReviews();
      },
    }
  );

  useEffect(() => {
    triggerLoadReviews();
  }, []);

  function onAdd(data: IReviewFormInputs) {
    triggerAddReview(data);
  }

  function onDelete(show_id: number, reviewId: number) {
    const url = `${swrKeys.delete_review + reviewId}`;
    const arg = {
      body: { id: show_id },
      url: url,
    };
    triggerDeleteReview(arg);
  }

  function onEdit(rating: number, comment: string, review_id: number) {
    const url = `${swrKeys.delete_review + review_id}`;
    const arg = {
      body: { rating: rating, comment: comment },
      url: url,
    };
    triggerEditReview(arg);
  }

  return {
    reviewList,
    onAdd,
    onDelete,
    onEdit,
  };
}
