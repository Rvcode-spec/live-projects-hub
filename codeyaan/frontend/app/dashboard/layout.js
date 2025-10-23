"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/context/AuthContext";

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  if (!user) return null;

  const themeColors = {
    admin: "bg-red-100",
    staff: "bg-blue-100",
    student: "bg-green-100",
  };

  return (
    <div className={`min-h-screen ${themeColors[user.role]} flex`}>
      <Sidebar role={user.role} />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
