import ReviewItem from "./ReviewItem";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ReviewItem", () => {
  const mockReview = {
    email: "test",
    avatar_url: "avatar.png",
    rating: 4.33,
    comment: "good",
  };

  it("should render user email", () => {
    render(<ReviewItem review={mockReview} onDelete={() => {}} />);

    const mail = screen.getByText(mockReview.email);
    expect(mail).toBeInTheDocument();
  });

  it("should render correct rating", () => {
    render(<ReviewItem review={mockReview} onDelete={() => {}} />);

    const rating = screen.getByText(mockReview.rating + " / 5");
    expect(rating).toBeInTheDocument();
  });

  it("should render correct comment", () => {
    render(<ReviewItem review={mockReview} onDelete={() => {}} />);

    const comment = screen.getByText(mockReview.comment);
    expect(comment).toBeInTheDocument();
  });

  it("should render delete button and call it on click", () => {
    const mockOnDelete = jest.fn();
    render(<ReviewItem review={mockReview} onDelete={mockOnDelete} />);

    const deleteIcon = screen.getByTestId("delete-icon");

    expect(deleteIcon).toBeInTheDocument();

    fireEvent.click(deleteIcon);

    expect(mockOnDelete).toHaveBeenCalled();
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockReview);
  });
});
