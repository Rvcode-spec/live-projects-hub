"use client";
import { useAuth } from "./../_context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    else if (!allowedRoles.includes(user.role)) router.push("/not-authorized");
  }, [user, router, allowedRoles]);

  if (!user) return null;
  return children;
}
