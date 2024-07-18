import { usePathname } from "next/navigation";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteReviewButton } from "../DeleteReviewButton/DeleteReviewButton";
import ReviewItem from "./ReviewItem";

const mockReview = {
  id: 1,
  user: {
    id: 1,
    email: "test@test.com",
    image_url: "",
  },
  rating: 4.33,
  comment: "good",
  show_id: 106,
};

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock(
  "@/components/features/review/DeleteReviewButton/DeleteReviewButton",
  () => {
    return jest.fn(() => null);
  }
);

describe("ReviewItem", () => {
  it("should render user email", () => {
    render(<ReviewItem review={mockReview} />);

    const mail = screen.getByText(mockReview.user.email);
    expect(mail).toBeInTheDocument();
  });

  it("should render correct rating", () => {
    render(<ReviewItem review={mockReview} />);

    const rating = screen.getByText(mockReview.rating + " / 5");
    expect(rating).toBeInTheDocument();
  });

  it("should render correct comment", () => {
    render(<ReviewItem review={mockReview} />);

    const comment = screen.getByText(mockReview.comment);
    expect(comment).toBeInTheDocument();
  });

  it("should render delete button", () => {
    (usePathname as jest.Mock).mockReturnValue(`/shows/${mockReview.show_id}`);

    localStorage.setItem("headers", JSON.stringify({ uid: "test@test.com" }));

    render(<ReviewItem review={mockReview} />);

    expect(DeleteReviewButton).toHaveBeenCalled();
  });
});
