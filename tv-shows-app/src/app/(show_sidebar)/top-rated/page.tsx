"use client";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import ShowListContainer from "@/components/shared/ShowListContainer/ShowListContainer";

export default function TopRated() {
  return (
    <>
      <AuthRedirect to={"/login"} condition={"loggedOut"} />
      <ShowListContainer topRated={true} />
    </>
  );
}
