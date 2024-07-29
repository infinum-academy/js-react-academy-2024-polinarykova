import { IShow } from "@/typings/show";
import { Image, Text, Flex } from "@chakra-ui/react";

interface IShowPickerCardProps {
  show: IShow;
}

export default function ShowPickerCard({ show }: IShowPickerCardProps) {
  return (
    <Flex flexDirection="column" width="200px" height="200px" gap={3}>
      <Image
        src={show.image_url}
        height="150px"
        width="100%"
        objectFit="cover"
        objectPosition="center"
        overflow="hidden"
        borderRadius="modalRadius"
      ></Image>
      <Text whiteSpace="normal" textAlign="center">
        {show.title}
      </Text>
    </Flex>
  );
}
