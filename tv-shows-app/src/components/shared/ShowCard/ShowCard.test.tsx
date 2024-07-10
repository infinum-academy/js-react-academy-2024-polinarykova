import { render, screen } from "@testing-library/react";
import ShowCard from "./ShowCard";

describe("ShowCard", () => {
  it("should render image", () => {
    render(<ShowCard title="test" imageUrl="test" avgRating={0} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });
  it("should render title", () => {
    const titleText = "test";
    render(<ShowCard title={titleText} imageUrl="test" avgRating={0} />);

    const title = screen.getByText(titleText);
    expect(title).toBeInTheDocument();
  });
  it("should display average rating", () => {
    const avgRating = 4.95;

    render(<ShowCard title={""} imageUrl="test" avgRating={avgRating} />);

    const rating = screen.getByText(avgRating);
    expect(rating).toBeInTheDocument();
  });
});
