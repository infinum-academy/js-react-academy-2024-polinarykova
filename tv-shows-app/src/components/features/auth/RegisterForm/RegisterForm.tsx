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

interface IRegisterFormInputs {
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterForm = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<IRegisterFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.register, SignInMutator, {
    onSuccess: (response) => {
      setError("");
      window.location.href = "/shows";
    },
    onError: (message) => {
      setError(message.toString().split(":")[1]);
    },
  });
  const onRegister = (data: IRegisterFormInputs) => {
    if (data.password != data.password_confirmation) {
      setError("Passwords don't match!");
    } else {
      trigger(data);
    }
  };
  return (
    <Flex
      direction="column"
      gap={3}
      alignItems="center"
      width="500px"
      bg="purple.800"
      paddingY={10}
      paddingX={12}
      borderRadius={30}
      margin="auto"
    >
      <Heading as="h2">Register</Heading>
      <Text>Please enter your email and password to register</Text>
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
        <FormControl isRequired={true}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            {...register("password_confirmation")}
            type="password"
            required
          ></Input>
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" marginTop={5}>
          Sign Up
        </Button>
        <Text>
          Already have an account?{" "}
          <Text
            as={NextLink}
            href={"/login"}
            textDecoration="underline"
            marginTop={3}
          >
            Sign in
          </Text>
        </Text>
      </chakra.form>
    </Flex>
  );
};
