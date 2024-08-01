import { StarIcon } from "@chakra-ui/icons";
import {
  Card,
  CardFooter,
  Text,
  Image,
  Flex,
  CardBody,
} from "@chakra-ui/react";

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
    <Card>
      <CardBody
        as={Image}
        src={imageUrl}
        fallbackSrc="https://fakeimg.pl/600x400"
      />
      <CardFooter>
        <Text>{title}</Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          gap={2}
          minWidth="fit-content"
        >
          <StarIcon />
          <Text>{avgRating.toFixed(2)} / 5</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
