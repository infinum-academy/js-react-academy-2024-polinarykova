import { Flex, Spinner, Text } from "@chakra-ui/react";
import ShowDetails from "../ShowDetails/ShowDetails";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IReview, IReviewList } from "@/typings/review";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { getShow } from "@/app/fetchers/shows";
import { useParams } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { CiWarning } from "react-icons/ci";

export default function ShowContainer() {
  const { id } = useParams() as Params;
  const {
    data: showResponse,
    error,
    isValidating,
  } = useSWR(`/api/shows/${id}`, () => getShow(id));

  const [reviewList, setReviewList] = useState<IReviewList>({ reviews: [] });

  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviewList(loadedList);
  }, []);

  function loadFromLocalStorage() {
    const reviewListLoaded = localStorage.getItem("reviews" + id);
    if (!reviewListLoaded) {
      return { reviews: [] };
    }
    return JSON.parse(reviewListLoaded);
  }

  function saveToLocalStorage(reviewListToSave: IReviewList) {
    localStorage.setItem("reviews" + id, JSON.stringify(reviewListToSave));
  }

  function addShowReview(review: IReview) {
    const newList = { reviews: [...reviewList.reviews, review] };
    setReviewList(newList);
    saveToLocalStorage(newList);
  }

  function deleteShowReview(reviewToRemove: IReview) {
    const newList = {
      reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
    };
    setReviewList(newList);
    saveToLocalStorage(newList);
  }

  if (isValidating) {
    return (
      <Flex margin="auto">
        <Spinner boxSize={50} />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex margin="auto" justifyContent="center" alignItems="center" gap={5}>
        {" "}
        <CiWarning size={50} />
        <Text letterSpacing="wide">Oops... Something went wrong</Text>
      </Flex>
    );
  }

  const {
    id: showId,
    title,
    description,
    average_rating,
    image_url,
  } = showResponse ?? {};

  return (
    <Flex
      bg="purple.900"
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
          id={showId ?? ""}
          title={title ?? ""}
          description={description ?? ""}
          average_rating={average_rating ?? 0}
          image_url={image_url ?? ""}
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
