import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface INavigationLinkProps {
  name: string;
  path: string;
  currCategory: string;
}

export default function NavigationLink({
  name,
  path,
  currCategory,
}: INavigationLinkProps) {
  return (
    <Text
      as={NextLink}
      href={path}
      border={currCategory == path ? "2px solid lightPurple" : "none"}
      borderRadius={currCategory == path ? "20px" : "none"}
      bg={currCategory == path ? "lightPurple" : "none"}
      width="fit-content"
      letterSpacing="wide"
      padding={2}
      marginLeft={-2}
    >
      {name}
    </Text>
  );
}
