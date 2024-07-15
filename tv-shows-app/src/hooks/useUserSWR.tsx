import { fetcher } from "@/app/fetchers/fetcher";
import { swrKeys } from "@/app/fetchers/swrKeys";
import useSWR from "swr";

export default function useUserSWR() {
  const headers =
    typeof localStorage === "undefined"
      ? undefined
      : localStorage.getItem("headers");
  const parsedHeaders = headers ? JSON.parse(headers) : {};

  const init: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "access-token": parsedHeaders["access-token"],
      client: parsedHeaders.client,
      uid: parsedHeaders.uid,
    },
  };

  const { mutate, data, isLoading, error } = useSWR(swrKeys.user, () =>
    fetcher(swrKeys.user, init)
  );

  return {
    mutate,
    data,
    isLoading,
    error,
  };
}
