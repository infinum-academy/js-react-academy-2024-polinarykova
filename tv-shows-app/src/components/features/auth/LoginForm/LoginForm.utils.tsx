// utils/useLogin.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { SignInMutator } from "@/app/fetchers/mutators";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { ISignInFormInputs } from "@/typings/input";

export const useLogin = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<ISignInFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.sign_in, SignInMutator, {
    onSuccess: () => {
      setError("");
      window.location.href = "/shows";
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
