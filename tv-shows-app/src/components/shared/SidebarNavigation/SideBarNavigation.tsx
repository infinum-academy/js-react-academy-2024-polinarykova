"use client";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { PiTelevisionSimple } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

export default function SidebarNavigation() {
  const link = window.location.href;
  const currentCat = link.split("/").reverse()[0];

  const [category, setCategory] = useState(currentCat);

  useEffect(() => {
    const handleUrlChange = () => {
      const link = window.location.href;
      const newCategory = link.split("/").reverse()[0];
      setCategory(newCategory);
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

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

      <Text
        as={NextLink}
        href={`/shows`}
        border={category == "shows" ? "2px solid purple.600" : "none"}
        borderRadius={category == "shows" ? "20px" : "none"}
        bg={category == "shows" ? "purple.600" : "none"}
        width="fit-content"
        letterSpacing="wide"
        padding={2}
        marginLeft={-2}
        onClick={() => setCategory("shows")}
      >
        {">"} All shows
      </Text>
      <Text
        as={NextLink}
        href={`/top-rated`}
        border={category == "top-rated" ? "2px solid purple.600" : "none"}
        borderRadius={category == "top-rated" ? "20px" : "none"}
        bg={category == "top-rated" ? "purple.600" : "none"}
        width="fit-content"
        letterSpacing="wide"
        padding={2}
        marginLeft={-2}
        onClick={() => setCategory("top-rated")}
      >
        {">"} Top rated
      </Text>
      <Text
        as={NextLink}
        href={`/my-profile`}
        onClick={() => setCategory("")}
        letterSpacing="wide"
      >
        <span color="black">{">"}</span> My profile
      </Text>
      <Flex
        as={NextLink}
        href={`/log-out`}
        marginTop="auto"
        flexDirection="row"
        alignItems="center"
        gap={3}
      >
        <Text
          fontSize="medium"
          letterSpacing="wide"
          onClick={() => setCategory("")}
        >
          Log out
        </Text>
        <FiLogOut />
      </Flex>
    </Flex>
  );
}
