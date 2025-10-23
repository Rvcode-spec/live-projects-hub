"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function StaffDashboard() {
  return (
    <ProtectedRoute allowedRoles={["staff", "admin"]}>
      <h1 className="text-2xl font-bold">Welcome, Staff!</h1>
      <p>Manage attendance and grades for your students.</p>
    </ProtectedRoute>
  );
}
