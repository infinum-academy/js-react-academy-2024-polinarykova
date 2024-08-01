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
import NextLink from "next/link";
import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { useLogin } from "./LoginForm.utils";

export function LoginForm() {
  const { error, register, handleSubmit, onLogin } = useLogin();
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
          <PasswordInput
            {...register("password")}
            placeholder="Enter password"
            data-testid="password"
          />
        </FormControl>
        {error && <Text color="error">{error}</Text>}
        <Button type="submit" marginTop={10}>
          LOG IN
        </Button>
        <Flex flexDirection="column" textAlign="center" marginTop={5}>
          <Text>Don't have an account?</Text>
          <Text as={NextLink} href={"/register"} textDecoration="underline">
            Register
          </Text>
        </Flex>
      </chakra.form>
    </Flex>
  );
}
