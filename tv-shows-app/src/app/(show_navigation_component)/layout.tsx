"use client";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SideBarNavigation";

import { Providers } from "../providers";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import HeaderNavigation from "@/components/shared/HeaderNavigation/HeaderNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationComponent = useBreakpointValue({
    base: <HeaderNavigation />,
    md: <SidebarNavigation />,
  });
  return (
    <Providers>
      <Flex direction={{ base: "column", md: "row" }} width="100%">
        {navigationComponent}
        <Flex marginLeft={{ base: "0", md: "20vw" }} width="100%" height="100%">
          {children}
        </Flex>
      </Flex>
    </Providers>
  );
}
