"use client";
import { Flex } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";
import { IShowList } from "@/typings/show";
import NextLink from "next/link";

interface IShowListProps {
  showList: IShowList;
}

export default function ShowList({ showList }: IShowListProps) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" marginTop={5}>
      {showList.shows.map((show) => {
        return (
          <NextLink href={`/all-shows/${show.id}`}>
            <ShowCard
              title={show.title}
              imageUrl={show.imageUrl ?? ""}
              avgRating={show.averageRating ?? 0}
            ></ShowCard>
          </NextLink>
        );
      })}
    </Flex>
  );
}
