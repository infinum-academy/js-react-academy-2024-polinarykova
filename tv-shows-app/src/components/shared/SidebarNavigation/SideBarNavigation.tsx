"use client";
import { Flex, Image } from "@chakra-ui/react";

import NavigationContent from "../NavigationContent/NavigationContent";

export default function SidebarNavigation() {
  return (
    <Flex
      minHeight="100vh"
      height="100%"
      width="350px"
      flexDirection="column"
      padding={10}
      gap={3}
      textStyle="subtitle.regular"
      position="fixed"
      boxShadow="10px 0px 10px rgba(0, 0, 0, 0.3)"
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <Image src="/assets/Logo.svg" />
      </Flex>
      <NavigationContent />
    </Flex>
  );
}
