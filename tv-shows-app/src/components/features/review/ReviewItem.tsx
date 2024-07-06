import { IReview } from "@/typings/review";
import { Flex, Text, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
            src="assets/avatar.png"
            borderRadius="full"
            boxSize={50}
          ></Image>
          <Flex marginY="auto" flexDirection="column">
            <Text>{review.email}</Text>
            <Text>{review.rating} / 5</Text>
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
        <Text marginX={20} marginTop={5}>
          {review.comment}
        </Text>
      </Flex>
    </>
  );
}
