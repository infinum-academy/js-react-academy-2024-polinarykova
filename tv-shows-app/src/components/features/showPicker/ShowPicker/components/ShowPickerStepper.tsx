import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import ShowPickerStep from "./ShowPickerStep";
import ShowPickerResults from "./ShowPickerResults";

export default function ShowPickerStepper() {
  const { currentStep, showList } = useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  if (currentStep < showList.shows.length - 1) {
    return <ShowPickerStep />;
  } else {
    return <ShowPickerResults />;
  }
}
