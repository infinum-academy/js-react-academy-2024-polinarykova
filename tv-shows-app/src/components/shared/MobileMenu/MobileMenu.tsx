import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavigationContent from "../NavigationContent/NavigationContent";

export default function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HamburgerIcon onClick={onOpen} aria-label="Open menu" boxSize={30} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent mt="30px" bg="transparent">
          <DrawerCloseButton
            border="1px solid white"
            borderRadius="modalRadius"
            size="sm"
          />
          <DrawerBody
            bg="purple"
            borderTopLeftRadius="modalRadius"
            paddingTop={10}
          >
            <NavigationContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
