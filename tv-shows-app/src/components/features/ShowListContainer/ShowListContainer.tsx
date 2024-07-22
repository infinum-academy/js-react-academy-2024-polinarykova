"use client";
import ShowList from "../ShowList/ShowList";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { CiWarning } from "react-icons/ci";
import { swrKeys } from "@/app/fetchers/swrKeys";
import useSWR from "swr";
import { IShowList } from "@/typings/show";
import { fetcher } from "@/app/fetchers/fetcher";

interface IShowListContainerProps {
  topRated: boolean;
}

export default function ShowListContainer({
  topRated,
}: IShowListContainerProps) {
  const { data, isLoading, error } = useSWR<IShowList>(
    topRated ? swrKeys.top_rated : swrKeys.shows,
    fetcher<IShowList>
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

  return <ShowList showList={data?.shows || []} />;
}
