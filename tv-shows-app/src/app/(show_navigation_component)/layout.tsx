"use client";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SideBarNavigation";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import HeaderNavigation from "@/components/shared/HeaderNavigation/HeaderNavigation";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationComponent = useBreakpointValue({
    base: <HeaderNavigation />,
    md: <SidebarNavigation />,
  });
  return (
    <Flex direction={{ base: "column", md: "row" }} width="100%">
      {navigationComponent}
      <Flex
        marginLeft={{ base: "0", md: "300px" }}
        width="100%"
        height="100%"
        padding={10}
      >
        {children}
      </Flex>
    </Flex>
  );
}
