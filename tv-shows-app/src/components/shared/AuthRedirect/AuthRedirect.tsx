"use client";
import { fetcher } from "@/app/fetchers/fetcher";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
  to: string;
  condition: "loggedIn" | "loggedOut";
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  const router = useRouter();

  const headers = localStorage.getItem("headers");
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

  const { data, error, isLoading } = useSWR(swrKeys.user, () =>
    fetcher(swrKeys.user, init)
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (error && condition === "loggedOut") {
      router.push(to);
    }

    if (!error && data && condition === "loggedIn") {
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;
};
