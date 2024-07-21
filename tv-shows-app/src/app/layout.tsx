import type { Metadata } from "next";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";

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
