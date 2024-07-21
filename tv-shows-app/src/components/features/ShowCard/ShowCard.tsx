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
      ></CardBody>
      <CardFooter>
        <Text textStyle="subtitle.bold" marginBlock="auto">
          {title}
        </Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          gap={3}
          textStyle="smallCaption.regular"
        >
          <StarIcon></StarIcon>
          <Text>{avgRating.toFixed(2)} / 5</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
