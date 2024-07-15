"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  chakra,
} from "@chakra-ui/react";
import {
  RegisterOptions,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { SignInMutator } from "@/app/fetchers/mutators";
import { useState } from "react";
import { swrKeys } from "@/app/fetchers/swrKeys";
import NextLink from "next/link";
import Logo from "@/components/shared/Logo/Logo";
import PasswordInput from "@/components/shared/PasswordInput/PasswordInput";
import { ISignInFormInputs } from "@/typings/input";
import { useLogin } from "./LoginForm.utils";

export function LoginForm() {
  const { error, register, handleSubmit, onLogin } = useLogin();
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
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter email"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <PasswordInput name={"password"} register={register} />
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
}
