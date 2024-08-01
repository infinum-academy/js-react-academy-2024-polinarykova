"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { postMutator } from "@/app/fetchers/mutators";
import { useState } from "react";
import { swrKeys } from "@/app/fetchers/swrKeys";
import NextLink from "next/link";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { ISignInFormInputs } from "@/typings/input";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignInFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.register, postMutator, {
    onSuccess: (response) => {
      setError("");
      router.push("/shows");
    },
    onError: (message) => {
      setError(message.toString().split(":")[1]);
    },
    throwOnError: false,
  });
  const onRegister = (data: ISignInFormInputs) => {
    if (data.password != data.password_confirmation) {
      setError("Passwords don't match!");
    } else {
      trigger(data);
    }
  };
  return (
    <Flex
      direction="column"
      gap={10}
      alignItems="center"
      width="500px"
      bg="lightPurple"
      paddingY={10}
      paddingX={12}
      borderRadius={30}
      margin="auto"
    >
      <Image src="/assets/Logo.svg" />
      <chakra.form
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
        onSubmit={handleSubmit(onRegister)}
      >
        <FormControl isRequired={true}>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email")}
            required
            type="email"
            placeholder="Enter email"
          ></Input>
        </FormControl>
        <FormControl isRequired={true}>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            {...register("password")}
            data-testid="password"
            name="password"
            placeholder="Enter password"
          />
        </FormControl>
        <FormControl isRequired={true}>
          <FormLabel>Confirm Password</FormLabel>
          <PasswordInput
            {...register("password_confirmation")}
            data-testid="password_confirmation"
            name="password_confirmation"
            placeholder="Repeat password"
          />
        </FormControl>
        {error && <Text color="error">{error}</Text>}
        <Button type="submit" marginTop={10}>
          SIGN UP
        </Button>
        <Flex flexDirection="column" textAlign="center" marginTop={5}>
          <Text>Already have an account?</Text>
          <Text as={NextLink} href={"/login"} textDecoration="underline">
            Sign in
          </Text>
        </Flex>
      </chakra.form>
    </Flex>
  );
};
