"use client";
import { Flex, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import NavigationLink from "../NavigationLink/NavigationLink";
import useUserSWR from "@/hooks/useUserSWR";
import { usePathname } from "next/navigation";

export default function NavigationContent() {
  const pathname = usePathname();

  const links = [
    { name: "All shows", path: "/shows" },
    { name: "Top rated", path: "/top-rated" },
    { name: "My profile", path: "/my-profile" },
  ];

  const { mutate } = useUserSWR();

  function handleLogOut() {
    localStorage.removeItem("headers");
    mutate(undefined, { revalidate: false });
  }

  return (
    <Flex direction="column" padding={5} height="100%">
      <Flex direction="column" flex="1" textStyle="title.regular" gap={3}>
        {links.map((link, index) => (
          <NavigationLink
            key={index}
            name={link.name}
            path={link.path}
            currCategory={pathname || ""}
          />
        ))}
      </Flex>

      <Flex
        flexDirection="row"
        alignItems="center"
        gap={3}
        onClick={handleLogOut}
        cursor="pointer"
      >
        <Text textStyle="body.regular" letterSpacing="wide">
          Log out
        </Text>
        <FiLogOut />
      </Flex>
    </Flex>
  );
}
