import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Progress } from "@chakra-ui/react";

export default function ShowPickerProgress() {
  const { currentStep, showList } = useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  const stepsNumber = showList.shows.length - 1;
  const progress = (currentStep / stepsNumber) * 100;

  if (currentStep == stepsNumber) {
    return null;
  }

  return <Progress value={progress} />;
}
