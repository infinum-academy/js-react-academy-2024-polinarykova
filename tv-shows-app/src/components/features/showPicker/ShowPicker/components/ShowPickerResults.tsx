import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Flex, useBreakpointValue, Text, Image } from "@chakra-ui/react";

export default function ShowPickerResults() {
  const { selectedShows } = useContext(ShowPickerContext);

  const pickedShow = selectedShows[selectedShows.length - 1];

  const ShowPickerCardComponent = useBreakpointValue({
    md: (
      <Flex
        flexDirection="column"
        gap={10}
        bg="lilac"
        padding={5}
        borderRadius="modalRadius"
      >
        <Image src={pickedShow.image_url} height="300px"></Image>
        <Text textStyle="title.bold" textAlign="center">
          {pickedShow.title}
        </Text>
      </Flex>
    ),
    base: (
      <Flex
        width="200px"
        justifyContent="center"
        alignItems="center"
        whiteSpace="normal"
        textAlign="center"
        color="lightPurple"
        textStyle="title.bold"
        padding={3}
      >
        {pickedShow.title}
      </Flex>
    ),
  });

  return (
    <Flex flexDirection="column" gap={10} width="100%">
      <Text width="100%" textAlign="center" textStyle="subtitle.bold">
        Tonight you are watching:
      </Text>
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
      >
        {ShowPickerCardComponent}
      </Flex>
    </Flex>
  );
}