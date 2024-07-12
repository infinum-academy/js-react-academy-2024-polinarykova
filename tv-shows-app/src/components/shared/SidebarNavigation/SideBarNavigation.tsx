"use client";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { PiTelevisionSimple } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from "next/navigation";
import NavigationLink from "../NavigationLink/NavigationLink";

export default function SidebarNavigation() {
  const pathname = usePathname();

  const links = [
    { name: "All shows", path: "/shows" },
    { name: "Top rated", path: "/top-rated" },
    { name: "My profile", path: "/my-profile" },
  ];

  return (
    <Flex
      bg="purple.800"
      minHeight="100vh"
      height="auto"
      width="20vw"
      color="white"
      flexDirection="column"
      padding={10}
      gap={3}
      fontSize="large"
      position="fixed"
      boxShadow="10px 0px 10px rgba(0, 0, 0, 0.3)"
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <PiTelevisionSimple size={30} />
        <Text
          marginLeft={2}
          letterSpacing="wide"
          fontSize="xl"
          fontWeight="bold"
          color="purple.100"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          TV SHOWS APP
        </Text>
      </Flex>

      {links.map((link) => {
        return (
          <NavigationLink
            name={link.name}
            path={link.path}
            currCategory={pathname || ""}
          ></NavigationLink>
        );
      })}

      <Flex
        as={NextLink}
        href={`/log-out`}
        marginTop="auto"
        flexDirection="row"
        alignItems="center"
        gap={3}
      >
        <Text fontSize="medium" letterSpacing="wide">
          Log out
        </Text>
        <FiLogOut />
      </Flex>
    </Flex>
  );
}
