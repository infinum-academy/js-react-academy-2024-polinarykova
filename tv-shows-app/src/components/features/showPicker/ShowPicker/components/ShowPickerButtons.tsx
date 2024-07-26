import { useContext, useState } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Button, Flex, ModalCloseButton, Text } from "@chakra-ui/react";

export default function ShowPickerButtons() {
  const {
    currentStep,
    setCurrentStep,
    showList,
    selectedShows,
    setSelectedShows,
    setError,
  } = useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  const stepsNumber = showList.shows.length - 1;

  function handleNext() {
    if (selectedShows.length <= currentStep) {
      setError("Pick a show!");
    } else {
      setError("");

      setCurrentStep(currentStep + 1);
    }
  }

  function handlePrevious() {
    if (currentStep == 0) {
      return;
    }

    if (selectedShows.length > currentStep) {
      const newSelectedList = selectedShows.slice(0, -1);
      setSelectedShows(newSelectedList);
    }
    setError("");
    setCurrentStep(currentStep - 1);
  }

  if (currentStep == stepsNumber) {
    return (
      <Flex flexDirection="row" width="100%" justifyContent="space-around">
        <Button
          onClick={() => {
            setCurrentStep(0);
            setSelectedShows([]);
          }}
          variant="outline"
        >
          Pick Again!
        </Button>
        <Button
          as={ModalCloseButton}
          variant="outline"
          marginTop={-2}
          marginBottom={2}
        >
          Close
        </Button>
      </Flex>
    );
  }

  return (
    <>
      <Text color="error" textAlign="center"></Text>

      <Flex width="100%" justifyContent="space-between" gap={2}>
        <Button
          variant={currentStep == 0 ? "disabled" : "secondary"}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          onClick={currentStep == stepsNumber ? () => {} : handleNext}
          variant={currentStep == stepsNumber ? "disabled" : "secondary"}
        >
          Next
        </Button>
      </Flex>
    </>
  );
}
