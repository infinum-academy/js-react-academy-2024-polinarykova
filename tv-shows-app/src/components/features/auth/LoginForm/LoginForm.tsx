"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { SignInMutator } from "@/app/fetchers/mutators";
import { useState } from "react";
import { swrKeys } from "@/app/fetchers/swrKeys";
import NextLink from "next/link";
import Logo from "@/components/shared/Logo/Logo";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<ILoginFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.sign_in, SignInMutator, {
    onSuccess: () => {
      setError("");
      window.location.href = "/shows";
    },
    onError: (message) => {
      setError(message.toString().split(":")[1]);
    },
  });
  const onLogin = (data: ILoginFormInputs) => {
    trigger(data);
  };
  return (
    <Flex
      direction="column"
      gap={10}
      alignItems="center"
      width="500px"
      bg="purple.800"
      paddingY={10}
      paddingX={12}
      borderRadius={30}
      margin="auto"
    >
      <Logo size="large" />
      <chakra.form
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
        onSubmit={handleSubmit(onLogin)}
      >
        <FormControl isRequired={true}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} required type="email"></Input>
        </FormControl>
        <FormControl isRequired={true}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            minLength={8}
            required
          ></Input>
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" marginTop={10}>
          Sign In
        </Button>
        <Text>
          Don't have an account yet?{" "}
          <Text
            as={NextLink}
            href={"/register"}
            textDecoration="underline"
            marginTop={3}
          >
            Register
          </Text>
        </Text>
      </chakra.form>
    </Flex>
  );
};