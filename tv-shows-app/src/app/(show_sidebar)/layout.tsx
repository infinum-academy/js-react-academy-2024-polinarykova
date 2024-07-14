"use client";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SideBarNavigation";

import { Providers } from "../providers";
import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <SidebarNavigation />
      <Flex marginLeft="20vw" width="100%">
        {children}
      </Flex>
    </Providers>
  );
}
