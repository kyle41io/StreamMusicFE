"use client";

import { useTranslations } from "next-intl";

import { useAuth } from "@/hooks/useAuth";

import HomePage from "./(content)/home/page";

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
