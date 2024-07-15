"use client";

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Home() {
  return (
    <>
      <AuthRedirect to={"/login"} condition={"loggedOut"} />
      <AuthRedirect to={"/shows"} condition={"loggedIn"} />
    </>
  );
}
