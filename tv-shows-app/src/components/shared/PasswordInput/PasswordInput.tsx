import { ISignInFormInputs } from "@/typings/input";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IPasswordInputProps {
  name: "password" | "password_confirmation";
  register: UseFormRegister<ISignInFormInputs>;
}

export default function PasswordInput({ name, register }: IPasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const hide = <Icon as={ViewOffIcon} onClick={handleClick} />;
  const display = <Icon as={ViewIcon} onClick={handleClick} />;

  return (
    <InputGroup>
      <Input
        data-testid={name}
        {...register(name)}
        type={show ? "text" : "password"}
        placeholder={
          name == "password_confirmation"
            ? "Enter password again"
            : "Enter password"
        }
        minLength={8}
        required
      />
      <InputRightElement marginRight={2} cursor="pointer">
        {show ? hide : display}
      </InputRightElement>
    </InputGroup>
  );
}
