// src/hooks/useLogout.ts
"use client";

import { useRouter } from "next/navigation";
import { usePost } from "./axios";

export const useLogout = () => {
  const router = useRouter();
  const { postData, isLoading } = usePost();

  const logout = async () => {
    try {
      await postData("authentication/logout", {});
      localStorage.clear();
      sessionStorage.clear();
      router.push("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return { logout, isLoading };
};
