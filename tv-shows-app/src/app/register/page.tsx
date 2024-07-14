"use client";
import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function Register() {
  return (
    <>
      <AuthRedirect condition={"loggedIn"} to="/shows" />
      <RegisterForm />
    </>
  );
}
