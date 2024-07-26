"use client";
import { IShow } from "../../../../typings/show";
import { Image, Heading, Flex, Text } from "@chakra-ui/react";

export default function ShowDetails({
  id,
  title,
  description,
  average_rating,
  image_url,
}: IShow) {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      maxWidth="100%"
      borderRadius="15px"
      bg="white"
      height="fit-content"
      paddingBottom={5}
      gap={5}
      overflow="hidden"
      marginY={5}
      textColor="purple"
    >
      <Image
        src={image_url}
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
        {average_rating ? average_rating.toFixed(2) + " / 5" : "No ratings"}
      </Text>
    </Flex>
  );
}
