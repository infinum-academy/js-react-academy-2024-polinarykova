"use client";
import { Flex } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";
import NextLink from "next/link";
import useSWR from "swr";
import { getShows, getTopRatedShows } from "@/app/fetchers/shows";

interface IShowListProps {
  topRated: boolean;
}

export default function ShowList({ topRated }: IShowListProps) {
  const {
    data: showListResponse,
    error,
    isLoading,
  } = useSWR(
    topRated ? "/api/shows/top-rated" : "/api/shows",
    topRated ? getTopRatedShows : getShows
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const fetchedList = showListResponse?.shows;

  return (
    <Flex flexWrap="wrap" justifyContent="center" marginTop={5}>
      {fetchedList?.map((show) => {
        return (
          <NextLink href={`/all-shows/${show.id}`}>
            <ShowCard
              key={show.id}
              title={show.title}
              imageUrl={show.image_url ?? ""}
              avgRating={show.average_rating ?? 0}
            ></ShowCard>
          </NextLink>
        );
      })}
    </Flex>
  );
}
