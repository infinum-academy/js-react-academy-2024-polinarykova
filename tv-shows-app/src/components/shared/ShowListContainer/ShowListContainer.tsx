"use client";
import useSWR from "swr";
import ShowList from "../ShowList/ShowList";
import { getTopRatedShows, getShows } from "@/app/fetchers/shows";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups something went wrong...</div>;
  }

  const fetchedList = showListResponse?.shows;

  return <ShowList showList={fetchedList || []} />;
}
