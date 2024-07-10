import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SideBarNavigation";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TV shows APP",
  description: "Review your favourite shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex bg="purple.900" textColor="white">
            <SidebarNavigation />
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
