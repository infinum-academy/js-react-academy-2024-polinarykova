import { Flex, Image } from "@chakra-ui/react";

import MobileMenu from "../MobileMenu/MobileMenu";

export default function HeaderNavigation() {
  return (
    <Flex
      as="header"
      position="fixed"
      width="100%"
      padding={5}
      justifyContent="space-between"
      zIndex={100}
      bg="purple"
      boxShadow="0px 10px 10px rgba(0, 0, 0, 0.3)"
    >
      <Image src="/assets/Logo.svg" />
      <MobileMenu />
    </Flex>
  );
}
