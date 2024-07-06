import { IReview } from "@/typings/review";
import { Button, Input, Textarea, Text } from "@chakra-ui/react";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export default function ReviewForm({ onAdd }: IReviewFormProps) {
  const user_avatar_url = "assets/avatar.png";
  const user_email = "best_reviewer@gmail.com";

  function onClickHandler() {
    const commentEl = document.getElementById("comment") as HTMLInputElement;
    const comment = commentEl.value;
    commentEl.value = "";

    const ratingEl = document.getElementById("rating") as HTMLInputElement;
    const rating = Number(ratingEl.value);
    ratingEl.value = "";

    const newReview: IReview = {
      email: user_email,
      avatar_url: user_avatar_url,
      rating: rating,
      comment: comment,
    };
    onAdd(newReview);
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
      />
      <Input
        bg="white"
        marginY={5}
        height={50}
        placeholder="Add rating"
        borderRadius={10}
        id="rating"
      ></Input>
      <Text id="error"></Text>
      <Button
        height={50}
        borderRadius={30}
        width={100}
        onClick={onClickHandler}
      >
        Post
      </Button>
    </>
  );
}
