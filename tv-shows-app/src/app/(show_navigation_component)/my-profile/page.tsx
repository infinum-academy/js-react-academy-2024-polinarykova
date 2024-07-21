"use client";

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
  return (
    <>
      <AuthRedirect condition={"loggedOut"} to="/login" />
      <div>my profile</div>
    </>
  );
}
