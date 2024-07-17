import { usePathname } from "next/navigation";
import ReviewItem from "./ReviewItem";
import { render, screen, fireEvent } from "@testing-library/react";

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

describe("ReviewItem", () => {
  it("should render user email", () => {
    render(
      <ReviewItem review={mockReview} onDelete={() => {}} onEdit={() => {}} />
    );

    const mail = screen.getByText(mockReview.user.email);
    expect(mail).toBeInTheDocument();
  });

  it("should render correct rating", () => {
    render(
      <ReviewItem review={mockReview} onDelete={() => {}} onEdit={() => {}} />
    );

    const rating = screen.getByText(mockReview.rating + " / 5");
    expect(rating).toBeInTheDocument();
  });

  it("should render correct comment", () => {
    render(
      <ReviewItem review={mockReview} onDelete={() => {}} onEdit={() => {}} />
    );

    const comment = screen.getByText(mockReview.comment);
    expect(comment).toBeInTheDocument();
  });

  it("should render delete button and call it on click", () => {
    const mockOnDelete = jest.fn();

    (usePathname as jest.Mock).mockReturnValue(`/shows/${mockReview.show_id}`);

    localStorage.setItem("headers", JSON.stringify({ uid: "test@test.com" }));

    render(
      <ReviewItem
        review={mockReview}
        onDelete={mockOnDelete}
        onEdit={() => {}}
      />
    );

    const deleteIcon = screen.getByTestId("delete-icon");

    expect(deleteIcon).toBeInTheDocument();

    fireEvent.click(deleteIcon);

    expect(mockOnDelete).toHaveBeenCalled();
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(
      mockReview.show_id,
      mockReview.id
    );
  });
});
