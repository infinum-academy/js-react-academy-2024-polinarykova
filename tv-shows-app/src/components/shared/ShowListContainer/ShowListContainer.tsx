"use client";
import ShowList from "../ShowList/ShowList";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { CiWarning } from "react-icons/ci";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { getAuthorizedMutator } from "@/app/fetchers/mutators";
import { useEffect } from "react";

interface IShowListContainerProps {
  topRated: boolean;
}

export default function ShowListContainer({
  topRated,
}: IShowListContainerProps) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    topRated ? swrKeys.top_rated : swrKeys.shows,
    getAuthorizedMutator
  );

  useEffect(() => {
    trigger();
  }, []);

  if (isMutating) {
    return (
      <Flex margin="auto">
        <Spinner boxSize={50} />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex margin="auto" justifyContent="center" alignItems="center" gap={5}>
        <CiWarning size={50} />
        <Text letterSpacing="wide">Oops... Something went wrong</Text>
      </Flex>
    );
  }

  return <ShowList showList={data?.shows} />;
}
