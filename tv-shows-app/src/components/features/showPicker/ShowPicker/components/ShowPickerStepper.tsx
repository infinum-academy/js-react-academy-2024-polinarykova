import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import ShowPickerStep from "./ShowPickerStep";
import ShowPickerResults from "./ShowPickerResults";

export default function ShowPickerStepper() {
  const { currentStep, showList } = useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  if (currentStep < Math.ceil(showList.shows.length / 4)) {
    return <ShowPickerStep />;
  } else {
    return <ShowPickerResults />;
  }
}
