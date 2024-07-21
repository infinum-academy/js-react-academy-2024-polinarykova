"use client";
import { Container, Flex, Text } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import NavigationContent from "../NavigationContent/NavigationContent";

export default function SidebarNavigation() {
  return (
    <Flex
      minHeight="100vh"
      height="auto"
      width="20vw"
      flexDirection="column"
      padding={10}
      gap={3}
      textStyle="subtitle.regular"
      position="fixed"
      boxShadow="10px 0px 10px rgba(0, 0, 0, 0.3)"
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <Logo size="small" />
      </Flex>
      <Container flex="1">
        <NavigationContent />
      </Container>
    </Flex>
  );
}
