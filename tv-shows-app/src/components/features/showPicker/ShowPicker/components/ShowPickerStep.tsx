import { useContext } from "react";
import { ShowPickerContext } from "./ShowPickerContextProvider";
import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import ShowPickerCard from "./ShowPickerCard";

export default function ShowPickerStep() {
  const { currentStep, showList, selectedShows, setSelectedShows } =
    useContext(ShowPickerContext);

  if (!showList) {
    return null;
  }

  const start = currentStep * 4;
  const end = Math.min((currentStep + 1) * 4, showList?.shows.length);

  const showSublist = showList?.shows.slice(start, end);

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={10}
    >
      {showSublist.map((show) => {
        const selected = selectedShows.find((s) => s === show);

        const ShowPickerCardComponent = useBreakpointValue({
          md: <ShowPickerCard show={show} />,
          base: (
            <Flex
              width="200px"
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
            bg={selected ? "lilac" : "white"}
            borderWidth="2px"
            borderStyle="solid"
            borderColor="lilac"
            onClick={
              selected
                ? () => {
                    setSelectedShows(selectedShows.filter((s) => s != show));
                  }
                : () => {
                    setSelectedShows([...selectedShows, show]);
                  }
            }
          >
            {ShowPickerCardComponent}
          </Button>
        );
      })}
    </Flex>
  );
}
