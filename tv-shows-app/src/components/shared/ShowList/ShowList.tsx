"use client";
import { Flex } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";
import NextLink from "next/link";
import { IShow, IShowList } from "@/typings/show";

interface IShowListProps {
  showList: Array<IShow>;
}

export default function ShowList({ showList }: IShowListProps) {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      marginTop={5}
      data-testid="list"
    >
      {showList?.map((show, index) => {
        return (
          <NextLink href={`/shows/${show.id}`} key={show.id}>
            <ShowCard
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
