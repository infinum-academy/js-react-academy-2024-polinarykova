"use client";

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function LogOut() {
  return (
    <>
      <AuthRedirect condition={"loggedOut"} to="/login" />
      <div>log out</div>
    </>
  );
}
