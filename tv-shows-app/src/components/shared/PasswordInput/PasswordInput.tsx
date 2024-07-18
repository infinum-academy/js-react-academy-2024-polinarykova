import { ISignInFormInputs } from "@/typings/input";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IPasswordInputProps extends InputProps {
  register: UseFormRegister<ISignInFormInputs>;
  name: "password" | "password_confirmation";
}

export default function PasswordInput({
  register,
  name,
  ...rest
}: IPasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const hide = <Icon as={ViewOffIcon} onClick={handleClick} />;
  const display = <Icon as={ViewIcon} onClick={handleClick} />;

  return (
    <InputGroup>
      <Input
        type={show ? "text" : "password"}
        minLength={8}
        required
        {...register(name)}
        {...rest}
      />
      <InputRightElement marginRight={2} cursor="pointer">
        {show ? hide : display}
      </InputRightElement>
    </InputGroup>
  );
}
