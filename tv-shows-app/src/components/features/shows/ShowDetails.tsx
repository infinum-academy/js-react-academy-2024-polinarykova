import { IShow } from "../../../typings/show";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function ShowDetails({
  title,
  description,
  averageRating,
  imageUrl,
}: IShow) {
  return (
    <Flex justifyContent="center" padding={10} height="100vh" bg="purple.900">
      <Flex
        flexDirection="column"
        width={{ base: "90vw", md: "75vw", lg: "60vw" }}
        borderRadius="15px"
        bg="white"
        height="fit-content"
        paddingBottom={5}
        gap={5}
        overflow="hidden"
      >
        <Image
          src={imageUrl}
          fallbackSrc="https://fakeimg.pl/600x400"
          height="400px"
          objectFit="cover"
          objectPosition="center"
        ></Image>
        <Heading size="md" padding={5}>
          {title}
        </Heading>
        <Text paddingX={5}>{description}</Text>
        <Text paddingX={5} paddingBottom={5}>
          {averageRating ? averageRating + " / 5" : "No ratings"}
        </Text>
      </Flex>
    </Flex>
  );
}
