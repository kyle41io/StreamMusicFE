"use client";

import { DetailProvider } from "@/store/MusicDetailProvider";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in", {
        scroll: true,
      });
    }
  }, []);
}
