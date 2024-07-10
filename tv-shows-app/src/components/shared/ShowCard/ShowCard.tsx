import { StarIcon } from "@chakra-ui/icons";
import { Card, CardFooter, Text, Heading, Image, Flex } from "@chakra-ui/react";

interface IShowCardProps {
  title: string;
  imageUrl: string;
  avgRating: number;
}

export default function ShowCard({
  title,
  imageUrl,
  avgRating,
}: IShowCardProps) {
  return (
    <Card
      margin={5}
      width="280px"
      height="420px"
      borderRadius={30}
      overflow="hidden"
    >
      <Image
        src={imageUrl}
        fallbackSrc="https://fakeimg.pl/600x400"
        height="300px"
        width="auto"
        objectFit="cover"
        objectPosition="center"
      ></Image>
      <CardFooter
        flexDirection="column"
        textColor="purple.900"
        fontWeight="500"
      >
        <Text fontSize="large" fontWeight="bold">
          {title}
        </Text>
        <Flex flexDirection="row" alignItems="center" gap={1} fontSize="large">
          <StarIcon></StarIcon>
          <Text>{avgRating}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
