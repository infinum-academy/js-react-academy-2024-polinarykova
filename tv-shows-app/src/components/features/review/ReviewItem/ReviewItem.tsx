import { IReview, IReviewFormInputs } from "@/typings/review";
import { Flex, Text, Image, chakra } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import RatingStars from "@/components/shared/RatingStars/RatingStars";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReviewForm from "../../../shared/ReviewForm/ReviewForm";
import { DeleteReviewButton } from "../DeleteReviewButton/DeleteReviewButton";

interface IReviewProps {
  review: IReview;
  onDelete: (id: number, reviewId: number) => void;
  onEdit: (rating: number, comment: string, review_id: number) => void;
}

export default function ReviewItem({ review, onDelete, onEdit }: IReviewProps) {
  const path = usePathname();
  const show_id = path?.split("/")[2];

  const headers = localStorage.getItem("headers");
  const parsedHeaders = headers ? JSON.parse(headers) : {};
  const currentUser = parsedHeaders.uid;

  let isFromCurrentUser = false;
  if (currentUser == review.user.email) isFromCurrentUser = true;

  const [editing, setEditing] = useState(false);

  function handleEditSubmit(data: IReviewFormInputs) {
    onEdit(data.rating, data.comment, review.id);
    setEditing(false);
  }

  function handleDelete() {
    setEditing(false);
    onDelete(Number(show_id), review.id);
  }

  return (
    <>
      <Flex
        bg="purple.700"
        height="fit-content"
        padding={7}
        borderRadius={15}
        textColor="white"
        flexDirection="column"
      >
        <Flex gap={30}>
          <Image
            src={review.user.image_url}
            fallbackSrc="/assets/avatar_default.png"
            borderRadius="full"
            boxSize={65}
          ></Image>
          <Flex flexDirection="column">
            <Text>{review.user.email}</Text>
            {!editing && (
              <Flex flexDirection="row" gap={1}>
                <Text marginY={3}>{review.rating} / 5</Text>
                <RatingStars
                  label={""}
                  value={{
                    selected: review.rating,
                    hovered: 0,
                  }}
                  size="20px"
                ></RatingStars>
              </Flex>
            )}
          </Flex>
          {isFromCurrentUser && (
            <Flex gap={3} marginLeft="auto" marginTop={-10}>
              {!editing && (
                <EditIcon
                  boxSize="20px"
                  alignSelf="center"
                  cursor="pointer"
                  onClick={() => {
                    setEditing(true);
                  }}
                ></EditIcon>
              )}
              <DeleteReviewButton handleDelete={handleDelete} />
            </Flex>
          )}
        </Flex>
        {!editing && (
          <Text marginX={95} marginTop={5}>
            {review.comment}
          </Text>
        )}
        {editing && (
          <chakra.div
            marginTop={-5}
            width="80%"
            placeSelf="center"
            marginLeft={4}
          >
            <ReviewForm
              onAdd={handleEditSubmit}
              editing={true}
              initialComment={review.comment}
              initialRating={review.rating}
            />
          </chakra.div>
        )}
      </Flex>
    </>
  );
}
