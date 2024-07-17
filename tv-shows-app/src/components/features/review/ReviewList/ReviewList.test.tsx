import ShowList from "@/components/shared/ShowList/ShowList";
import { IReviewList } from "@/typings/review";
import { render } from "@testing-library/react";
import ReviewList from "./ReviewList";
import ReviewItem from "../ReviewItem/ReviewItem";

jest.mock("@/components/features/review/ReviewItem/ReviewItem", () => {
  return jest.fn(({ review, onDelete, onEdit }) => null);
});

const mockReviewList: IReviewList = {
  reviews: [
    {
      id: 1,
      rating: 4.5,
      comment: "good",
      user: {
        id: 1,
        email: "user1@example.com",
        image_url: "http://example.com/image1.jpg",
      },
    },
    {
      id: 2,
      rating: 3.8,
      comment: "ok",
      user: {
        id: 2,
        email: "user2@example.com",
        image_url: "http://example.com/image2.jpg",
      },
    },
    {
      id: 3,
      rating: 5.0,
      comment: "great",
      user: {
        id: 3,
        email: "user3@example.com",
        image_url: "http://example.com/image3.jpg",
      },
    },
  ],
};

export default mockReviewList;

describe("ReviewList", () => {
  it("should render ReviewItem component", () => {
    render(
      <ReviewList
        reviewList={mockReviewList}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(ReviewItem).toHaveBeenCalledTimes(3);

    mockReviewList.reviews.map((review, index) => {
      return expect(ReviewItem).toHaveBeenCalledWith(
        expect.objectContaining({
          review: review,
          onDelete: expect.any(Function),
          onEdit: expect.any(Function),
        }),
        {}
      );
    });
  });
});
