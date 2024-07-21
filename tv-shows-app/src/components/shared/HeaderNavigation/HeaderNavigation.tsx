import { Flex } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function HeaderNavigation() {
  return (
    <Flex
      as="header"
      position="sticky"
      padding={5}
      justifyContent="space-between"
    >
      <Logo size={"small"} />
      <MobileMenu />
    </Flex>
  );
}
