"use client";

import ProfileInfo from "@/components/features/ProfileInfo/ProfileInfo";
import ShowPicker from "@/components/features/showPicker/ShowPicker/ShowPicker";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Flex } from "@chakra-ui/react";

export default function MyProfile() {
  return (
    <Flex direction="column" width="100%">
      <AuthRedirect condition={"loggedOut"} to="/login" />
      <ProfileInfo />
      <ShowPicker />
    </Flex>
  );
}
