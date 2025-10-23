"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
      <p>Manage staff, students, and global settings.</p>
    </ProtectedRoute>
  );
}
