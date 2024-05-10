import { AuthContext } from "@/context/auth";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth hook must be used within AuthProvider");
  }

  return context;
}
