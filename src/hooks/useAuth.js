"use client";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  const { userData, setUserData } = useContext(DetailProvider);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in", {
        scroll: true,
      });
    } else {
      setUserData(token);
    }
  }, []);

}
