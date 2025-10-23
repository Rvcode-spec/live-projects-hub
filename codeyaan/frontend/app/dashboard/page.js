"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    else {
      if (user.role === "admin") router.push("/dashboard/admin");
      else if (user.role === "staff") router.push("/dashboard/staff");
      else if (user.role === "student") router.push("/dashboard/student");
      else router.push("/not-authorized");
    }
  }, [user, router]);

  return <p>Loading dashboard...</p>;
}
