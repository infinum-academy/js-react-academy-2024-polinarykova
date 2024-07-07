import { IReview } from "@/typings/review";
import { Flex, Text, Image } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";

interface IReviewProps {
  review: IReview;
  onDelete: (review: IReview) => void;
}

export default function ({ review, onDelete }: IReviewProps) {
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
            src={review.avatar_url}
            fallbackSrc="assets/avatar_default.png"
            borderRadius="full"
            boxSize={65}
          ></Image>
          <Flex marginY="auto" flexDirection="column">
            <Text>{review.email}</Text>
            <Flex flexDirection="row" gap={1}>
              <Text marginY={3}>{review.rating} / 5</Text>
              {[...Array(5)].map((_, index) => {
                return (
                  <StarIcon
                    boxSize="20px"
                    color={review.rating > index ? "gold" : "white"}
                    marginY={3}
                    marginLeft={2}
                    key={index}
                  ></StarIcon>
                );
              })}
            </Flex>
          </Flex>
          <DeleteIcon
            onClick={() => {
              onDelete(review);
            }}
            boxSize={30}
            alignSelf="center"
            marginLeft="auto"
            cursor="pointer"
          ></DeleteIcon>
        </Flex>
        <Text marginX={95} marginTop={5}>
          {review.comment}
        </Text>
      </Flex>
    </>
  );
}
