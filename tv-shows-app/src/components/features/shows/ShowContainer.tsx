import { Flex } from "@chakra-ui/react";
import ShowDetails from "./ShowDetails";
import ShowReviewSection from "./ShowReviewSection";
import { IReview, IReviewList } from "@/typings/review";
import { useState, useEffect } from "react";

export default function () {
  const title = "Brooklyn Nine-Nine";
  const description =
    "Brooklyn Nine-Nine is a comedic TV series that follows the hilarious antics of Detective Jake Peralta and his diverse, quirky colleagues at the 99th precinct of the NYPD in Brooklyn, led by their stern but lovable Captain Holt.";
  const imageUrl = "/assets/brooklyn99.jpg";

  const mockReviewList: IReviewList = {
    reviews: [],
  };

  const [reviewList, setReviewList] = useState(mockReviewList);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviewList(loadedList);
    setAverageRating(calculateAverage(loadedList));
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
    setAverageRating(calculateAverage(newList));
    saveToLocalStorage(newList);
  }

  function deleteShowReview(reviewToRemove: IReview) {
    const newList: IReviewList = {
      reviews: reviewList.reviews.filter((review) => review != reviewToRemove),
    };
    setReviewList(newList);
    setAverageRating(calculateAverage(newList));
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
    >
      <Flex
        width={{ base: "90vw", md: "75vw", lg: "60vw" }}
        flexDirection="column"
      >
        <ShowDetails
          title={title}
          description={description}
          averageRating={averageRating}
          imageUrl={imageUrl}
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
