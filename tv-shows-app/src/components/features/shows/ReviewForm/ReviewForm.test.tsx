import ReviewForm from "./ReviewForm";
import { render, screen } from "@testing-library/react";

describe("ReviewForm", () => {
  it("should render input, rating and button components", () => {
    const mockOnAdd = jest.fn();
    render(<ReviewForm onAdd={mockOnAdd} />);

    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    const rating = screen.getByText("Rating:");

    expect(rating).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
