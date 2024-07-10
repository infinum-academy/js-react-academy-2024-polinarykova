"use client";
import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";
import { useParams } from "next/navigation";
import { mockShowList } from "../../../../public/mockShowLIst";
import { IShow } from "@/typings/show";
import { Flex } from "@chakra-ui/react";

export default function Show() {
  const params = useParams();

  const show: IShow = mockShowList.shows.filter(
    (show) => show.id == Number(params?.id)
  )[0];

  return <ShowContainer show={show}></ShowContainer>;
}
