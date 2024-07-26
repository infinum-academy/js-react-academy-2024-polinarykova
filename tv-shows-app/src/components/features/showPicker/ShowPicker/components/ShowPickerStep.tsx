import { useContext, useEffect } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Button, Flex, useBreakpointValue, Text } from "@chakra-ui/react";
import ShowPickerCard from "./ShowPickerCard";
import { IShow } from "@/typings/show";

export default function ShowPickerStep() {
  const {
    currentStep,
    showList,
    selectedShows,
    setSelectedShows,
    error,
    setError,
  } = useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  let showsToDisplay: IShow[] = [];
  if (currentStep == 0) {
    showsToDisplay = showList.shows.slice(-2);
  } else {
    const showFromList: IShow =
      showList.shows[showList.shows.length - 2 - currentStep];

    const showSelected: IShow = selectedShows[currentStep - 1];

    showsToDisplay = [showFromList, showSelected];
  }

  function handleSelect(show: IShow) {
    if (selectedShows.length > currentStep) {
      const newSelectedList = [...selectedShows];
      newSelectedList[currentStep] = show;
      setSelectedShows(newSelectedList);
    } else {
      setSelectedShows([...selectedShows, show]);
    }
    setError("");
  }

  function handleUnselect() {
    const newSelectedList = selectedShows.slice(0, -1);
    setSelectedShows(newSelectedList);
  }

  return (
    <Flex flexDirection="column" width="100%" gap={10}>
      <Text
        textAlign="center"
        textStyle={{ base: "title.bold", md: "body.bold" }}
        marginY={5}
      >
        Pick the show you like better:
      </Text>
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
      >
        {showsToDisplay.map((show) => {
          const selected =
            selectedShows.length > currentStep
              ? selectedShows[currentStep] === show
              : false;

          const ShowPickerCardComponent = useBreakpointValue({
            md: <ShowPickerCard show={show} />,
            base: (
              <Flex
                width="200px"
                height="100px"
                justifyContent="center"
                alignItems="center"
                whiteSpace="normal"
                textAlign="center"
                padding={3}
              >
                {show.title}
              </Flex>
            ),
          });

          return (
            <Button
              width="200px"
              key={show.id}
              variant={selected ? "selected" : "outline"}
              bg={selected ? "lightPurple" : "white"}
              onClick={
                selected ? () => handleUnselect() : () => handleSelect(show)
              }
              boxShadow="10px 10px 10px rgba(0,0,0,0.3)"
            >
              {ShowPickerCardComponent}
            </Button>
          );
        })}
      </Flex>
      <Text color="error" textAlign="center" marginTop={-3}>
        {error}
      </Text>
    </Flex>
  );
}
