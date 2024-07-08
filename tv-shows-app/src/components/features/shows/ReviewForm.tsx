import { IReview } from "@/typings/review";
import { Button, Input, Textarea, Text } from "@chakra-ui/react";
import RatingStars from "../review/RatingStars";
import { useState } from "react";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export default function ReviewForm({ onAdd }: IReviewFormProps) {
  const user_avatar_url = "assets/avatar.jpeg";
  const user_email = "best_reviewer@gmail.com";

  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);

  function onClickHandler() {
    const commentEl = document.getElementById("comment") as HTMLInputElement;
    const comment = commentEl.value;
    commentEl.value = "";

    if (selectedStars) {
      const newReview: IReview = {
        email: user_email,
        avatar_url: user_avatar_url,
        rating: selectedStars,
        comment: comment,
      };
      onAdd(newReview);
      setSelectedStars(0);
    }
  }

  function onChange(clicked: boolean, index: number) {
    if (clicked) {
      setSelectedStars(index);
    } else {
      setHoveredStars(index);
    }
  }

  return (
    <>
      <Textarea
        bg="white"
        height={100}
        borderRadius={10}
        placeholder="Add review"
        id="comment"
        flexDirection="column"
        marginBottom={5}
      />
      <RatingStars
        label="Rating: "
        onChange={onChange}
        value={{ selected: selectedStars, hovered: hoveredStars }}
      />
      <Button
        height={50}
        borderRadius={30}
        width={100}
        marginTop={5}
        onClick={onClickHandler}
      >
        Post
      </Button>
    </>
  );
}
