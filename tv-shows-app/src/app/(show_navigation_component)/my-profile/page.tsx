"use client";

import ShowPicker from "@/components/features/showPicker/ShowPicker/ShowPicker";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
  return (
    <>
      <AuthRedirect condition={"loggedOut"} to="/login" />
      <ShowPicker />
    </>
  );
}
