"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { postMutator } from "@/app/fetchers/mutators";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { ISignInFormInputs } from "@/typings/input";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignInFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.sign_in, postMutator, {
    onSuccess: () => {
      setError("");
      router.push("/shows");
    },
    onError: (message) => {
      setError(message.toString().split(":")[1]);
    },
  });

  const onLogin = (data: ISignInFormInputs) => {
    trigger(data);
  };

  return {
    error,
    register,
    handleSubmit,
    onLogin,
  };
};
