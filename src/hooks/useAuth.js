"use client";

import { DetailProvider } from "@/store/MusicDetailProvider";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { UserData } from "@/store/UserDataProvider";


export function useAuth() {
  const router = useRouter();

  const {setIsLogin} = useContext(UserData)

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in", {
        scroll: true,
      });
    }
  }, []);
}
