import { render, screen } from "@testing-library/react";
import ShowList from "./ShowList";
import { IShow } from "@/typings/show";

describe("ShowList", () => {
  const mockShowList: Array<IShow> = [
    {
      id: "1",
      title: "Show 1",
      image_url: "image1.jpg",
      average_rating: 4.5,
      description: "desc1",
    },
    {
      id: "2",
      title: "Show 2",
      image_url: "image2.jpg",
      average_rating: 3.8,
      description: "desc2",
    },
    {
      id: "3",
      title: "Show 3",
      image_url: "image3.jpg",
      average_rating: 4.2,
      description: "desc3",
    },
  ];

  it("should render all provided shows", () => {
    render(<ShowList showList={mockShowList}></ShowList>);

    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
    expect(list.children.length).toEqual(mockShowList.length);
  });
});
