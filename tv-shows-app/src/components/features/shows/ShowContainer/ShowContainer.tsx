"use client";
import { Flex } from "@chakra-ui/react";
import ShowDetails from "../ShowDetails/ShowDetails";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IReview, IReviewList } from "@/typings/review";
import { useState, useEffect } from "react";
import { IShow } from "@/typings/show";

interface IShowContainerProps {
  show: IShow;
}

export default function ShowContainer({ show }: IShowContainerProps) {
  const mockReviewList: IReviewList = {
    reviews: [],
  };

  const [reviewList, setReviewList] = useState(mockReviewList);
  let averageRating = calculateAverage(reviewList);

  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviewList(loadedList);
  }, []);

  function loadFromLocalStorage() {
    const reviewListLoaded = localStorage.getItem("reviews");
    if (!reviewListLoaded) {
      return mockReviewList;
    }
    return JSON.parse(reviewListLoaded);
  }

  function saveToLocalStorage(reviewList: IReviewList) {
    localStorage.setItem("reviews", JSON.stringify(reviewList));
  }

  function addShowReview(review: IReview) {
    const newList = {
      reviews: [...reviewList.reviews, review],
    };
    setReviewList(newList);
    saveToLocalStorage(newList);
  }

  function deleteShowReview(reviewToRemove: IReview) {
    const newList: IReviewList = {
      reviews: reviewList.reviews.filter((review) => review != reviewToRemove),
    };
    setReviewList(newList);
    saveToLocalStorage(newList);
  }

  function calculateAverage(reviewList: IReviewList) {
    if (!reviewList.reviews.length) {
      return 0;
    }

    let sum = 0;
    reviewList.reviews.forEach((review) => (sum += review.rating));

    return sum / reviewList.reviews.length;
  }

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
          id={show.id}
          title={show.title}
          description={show.description}
          averageRating={show.averageRating}
          imageUrl={show.imageUrl}
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
