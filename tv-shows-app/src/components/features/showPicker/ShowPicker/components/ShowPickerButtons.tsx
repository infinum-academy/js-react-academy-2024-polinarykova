import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Button, Flex } from "@chakra-ui/react";

export default function ShowPickerButtons() {
  const { currentStep, setCurrentStep, showList, setSelectedShows } =
    useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  const stepsNumber = Math.ceil(showList.shows.length / 4);

  if (currentStep == stepsNumber) {
    return (
      <Button
        onClick={() => {
          setCurrentStep(0);
          setSelectedShows([]);
        }}
        alignSelf="center"
        variant="outline"
      >
        Pick Again!
      </Button>
    );
  }

  return (
    <Flex width="100%" justifyContent="space-between">
      <Button
        variant={currentStep == 0 ? "disabled" : "secondary"}
        onClick={
          currentStep == 0 ? () => {} : () => setCurrentStep(currentStep - 1)
        }
      >
        Previous
      </Button>
      <Button
        onClick={
          currentStep == stepsNumber
            ? () => {}
            : () => setCurrentStep(currentStep + 1)
        }
        variant={currentStep == stepsNumber ? "disabled" : "secondary"}
      >
        Next
      </Button>
    </Flex>
  );
}
