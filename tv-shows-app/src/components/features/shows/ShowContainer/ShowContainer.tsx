import { Flex, Spinner, Text } from "@chakra-ui/react";
import ShowDetails from "../ShowDetails/ShowDetails";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { useParams } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { CiWarning } from "react-icons/ci";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { fetcher } from "@/app/fetchers/fetcher";
import useSWR from "swr";
import { IShow } from "@/typings/show";

export default function ShowContainer() {
  const { id } = useParams() as Params;

  const { data, error, isLoading } = useSWR<IShow>(
    swrKeys.show(id),
    async () => {
      const response = await fetcher<{ show: IShow }>(swrKeys.show(id));
      return response.show;
    }
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

  return (
    <Flex
      minHeight="100vh"
      height="fit-content"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Flex flexDirection="column">
        <ShowDetails
          id={data?.id ?? ""}
          title={data?.title ?? ""}
          description={data?.description ?? ""}
          average_rating={data?.average_rating ?? 0}
          image_url={data?.image_url ?? ""}
        />
        <ShowReviewSection />
      </Flex>
    </Flex>
  );
}
