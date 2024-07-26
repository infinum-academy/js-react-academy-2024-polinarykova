import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Flex } from "@chakra-ui/react";
import { Providers } from "./providers";

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
      <body>
        <Providers>
          <Flex minHeight="100vh">{children}</Flex>
        </Providers>
      </body>
    </html>
  );
}
