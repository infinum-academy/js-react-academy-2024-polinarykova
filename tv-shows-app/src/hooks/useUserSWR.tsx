import { fetcher } from "@/app/fetchers/fetcher";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { IUser } from "@/typings/review";
import useSWR from "swr";

interface IResponseUser {
  user: IUser;
}

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

  const { mutate, data, isLoading, error } = useSWR<IResponseUser>(
    swrKeys.user,
    () => fetcher<IResponseUser>(swrKeys.user)
  );

  return {
    mutate,
    data,
    isLoading,
    error,
  };
}
