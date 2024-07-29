"use client";

import ShowPickerContextProvider from "@/components/features/showPicker/ShowPicker/components/ShowPickerContextProvider";
import Fonts from "@/styles/theme/foundations/Fonts/Fonts";
import theme from "@/styles/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ShowPickerContextProvider>{children}</ShowPickerContextProvider>
    </ChakraProvider>
  );
}
