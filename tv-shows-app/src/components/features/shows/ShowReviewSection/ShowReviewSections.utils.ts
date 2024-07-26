import { fetcher } from "@/app/fetchers/fetcher";
import { postAuthorizedMutator } from "@/app/fetchers/mutators";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { IReviewFormInputs, IReviewList } from "@/typings/review";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export function useHandleReviews(id: string) {
  const { mutate, data } = useSWR(swrKeys.load_reviews(id), () =>
    fetcher<IReviewList>(swrKeys.load_reviews(id))
  );

  const { trigger: triggerAddReview } = useSWRMutation(
    swrKeys.add_review,
    postAuthorizedMutator,
    {
      onSuccess: () => {
        mutate();
      },
    }
  );

  function onAdd(data: IReviewFormInputs) {
    triggerAddReview(data);
  }

  return {
    data,
    onAdd,
  };
}
