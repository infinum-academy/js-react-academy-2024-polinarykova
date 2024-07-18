"use client";
import { fetcher } from "@/app/fetchers/fetcher";
import { swrKeys } from "@/app/fetchers/swrKeys";
import useUserSWR from "@/hooks/useUserSWR";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
  to: string;
  condition: "loggedIn" | "loggedOut";
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  const router = useRouter();

  const { data, isLoading, error } = useUserSWR();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if ((!data || error) && condition === "loggedOut") {
      router.push(to);
    }

    if (!error && data && condition === "loggedIn") {
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;
};
