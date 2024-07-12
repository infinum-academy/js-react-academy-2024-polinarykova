"use client";
import useSWR from "swr";
import ShowList from "../ShowList/ShowList";
import { getTopRatedShows, getShows } from "@/app/fetchers/shows";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { CiWarning } from "react-icons/ci";

interface IShowListContainerProps {
  topRated: boolean;
}

export default function ShowListContainer({
  topRated,
}: IShowListContainerProps) {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR(
    topRated ? "/api/shows/top-rated" : "/api/shows",
    topRated ? getTopRatedShows : getShows
  );

  if (isLoading) {
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

  const fetchedList = showListResponse?.shows;

  return <ShowList showList={fetchedList || []} />;
}
