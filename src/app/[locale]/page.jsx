"use client";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Home from "./(content)/home/page";
// import SignInPage from "./auth/sign-in/page";
import HomePage from "./(content)/home/page";
import { useAuth } from "@/hooks/useAuth";

function Page({ data }) {
  const t = useTranslations("Auth");

  useAuth();

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default Page;
