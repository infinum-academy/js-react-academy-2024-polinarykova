import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SidebarNavigation from "../SidebarNavigation/SideBarNavigation";
import NavigationContent from "../NavigationContent/NavigationContent";

export default function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HamburgerIcon onClick={onOpen} aria-label="Open menu" boxSize={30} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody bg="purple">
            <NavigationContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
