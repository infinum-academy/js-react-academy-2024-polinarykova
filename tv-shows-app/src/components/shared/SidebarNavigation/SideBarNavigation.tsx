import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { PiTelevisionSimple } from "react-icons/pi";

export default function SidebarNavigation() {
  return (
    <Flex
      bg="purple.800"
      height="100vh"
      width="20vw"
      color="white"
      flexDirection="column"
      padding={10}
      gap={3}
      fontSize="large"
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <PiTelevisionSimple size={25} />
        <Text marginLeft={2}>TV SHOWS APP</Text>
      </Flex>

      <Text as={NextLink} href={`/all-shows`}>
        All shows
      </Text>
      <Text as={NextLink} href={`/top-rated`}>
        Top rated
      </Text>
      <Text as={NextLink} href={`/my-profile`}>
        My profile
      </Text>
      <Text as={NextLink} href={`/log-out`} marginTop="auto" fontSize="medium">
        Log out
      </Text>
    </Flex>
  );
}
