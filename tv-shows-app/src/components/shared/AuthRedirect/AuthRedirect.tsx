"use client";
import useUserSWR from "@/hooks/useUserSWR";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
