import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export const PasswordInput = forwardRef<InputProps, "input">((props, ref) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const hide = <Icon as={ViewOffIcon} onClick={handleClick} />;
  const display = <Icon as={ViewIcon} onClick={handleClick} />;

  return (
    <InputGroup>
      <Input
        ref={ref}
        type={show ? "text" : "password"}
        minLength={8}
        required
        {...props}
      />
      <InputRightElement marginRight={2} cursor="pointer">
        {show ? hide : display}
      </InputRightElement>
    </InputGroup>
  );
});
