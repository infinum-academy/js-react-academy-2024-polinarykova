import { Flex, Spinner, Text } from "@chakra-ui/react";
import ShowDetails from "../ShowDetails/ShowDetails";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IReview, IReviewList } from "@/typings/review";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { CiWarning } from "react-icons/ci";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./ShowContainer.utils";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { loggedMutator } from "@/app/fetchers/mutators";
import { IShow } from "@/typings/show";

export default function ShowContainer() {
  const { id } = useParams() as Params;

  const [reviewList, setReviewList] = useState<IReviewList>({ reviews: [] });
  const [show, setShow] = useState<IShow>({
    id: "",
    title: "",
    description: "",
  });

  const { trigger, isMutating, error } = useSWRMutation(
    swrKeys.shows + `/${id}`,
    loggedMutator,
    {
      onSuccess: (data) => {
        setShow(data.show);
      },
    }
  );

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    const loadedList = loadFromLocalStorage(id);
    if (loadedList) {
      setReviewList(loadedList);
    }
  }, [id]);

  function addShowReview(review: IReview) {
    const newList = { reviews: [...reviewList.reviews, review] };
    setReviewList(newList);
    saveToLocalStorage(newList, id);
  }

  function deleteShowReview(reviewToRemove: IReview) {
    const newList = {
      reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
    };
    setReviewList(newList);
    saveToLocalStorage(newList, id);
  }

  if (isMutating) {
    return (
      <Flex margin="auto">
        <Spinner boxSize={50} />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex margin="auto" justifyContent="center" alignItems="center" gap={5}>
        <CiWarning size={50} />
        <Text letterSpacing="wide">Oops... Something went wrong</Text>
      </Flex>
    );
  }

  return (
    <Flex
      minHeight="100vh"
      height="fit-content"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Flex
        width={{ base: "90%", md: "75%", lg: "60%" }}
        flexDirection="column"
      >
        <ShowDetails
          id={show.id ?? ""}
          title={show.title ?? ""}
          description={show.description ?? ""}
          average_rating={show.average_rating ?? 0}
          image_url={show.image_url ?? ""}
        />
        <ShowReviewSection
          reviewList={reviewList}
          addShowReview={addShowReview}
          deleteShowReview={deleteShowReview}
        />
      </Flex>
    </Flex>
  );
}
