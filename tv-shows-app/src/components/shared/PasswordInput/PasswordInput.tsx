import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

export default function PasswordInput({ ...rest }: InputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const hide = <Icon as={ViewOffIcon} onClick={handleClick} />;
  const display = <Icon as={ViewIcon} onClick={handleClick} />;

  return (
    <InputGroup>
      <Input
        {...rest}
        type={show ? "text" : "password"}
        minLength={8}
        required
      />
      <InputRightElement marginRight={2} cursor="pointer">
        {show ? hide : display}
      </InputRightElement>
    </InputGroup>
  );
}
