"use client";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { PiTelevisionSimple } from "react-icons/pi";

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
    >
      <Flex marginLeft={-5} marginTop={-5} marginBottom={5}>
        <PiTelevisionSimple size={25} />
        <Text marginLeft={2}>TV SHOWS APP</Text>
      </Flex>

      <Text
        as={NextLink}
        href={`/shows`}
        border={category == "shows" ? "2px solid purple.600" : "none"}
        borderRadius={category == "shows" ? "20px" : "none"}
        bg={category == "shows" ? "purple.600" : "none"}
        width="fit-content"
        padding={2}
        marginLeft={-2}
        onClick={() => setCategory("shows")}
      >
        All shows
      </Text>
      <Text
        as={NextLink}
        href={`/top-rated`}
        border={category == "top-rated" ? "2px solid purple.600" : "none"}
        borderRadius={category == "top-rated" ? "20px" : "none"}
        bg={category == "top-rated" ? "purple.600" : "none"}
        width="fit-content"
        padding={2}
        marginLeft={-2}
        onClick={() => setCategory("top-rated")}
      >
        Top rated
      </Text>
      <Text as={NextLink} href={`/my-profile`} onClick={() => setCategory("")}>
        My profile
      </Text>
      <Text
        as={NextLink}
        href={`/log-out`}
        marginTop="auto"
        fontSize="medium"
        onClick={() => setCategory("")}
      >
        Log out
      </Text>
    </Flex>
  );
}
