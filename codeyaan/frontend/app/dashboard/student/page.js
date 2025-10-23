"use client";
import ProtectedRoute from "../../_components/ProtectedRoute";

export default function StudentDashboard() {
  return (
    <ProtectedRoute allowedRoles={["student", "staff", "admin"]}>
      <h1 className="text-2xl font-bold">Welcome, Student!</h1>
      <p>Your progress and enrolled courses are here.</p>
    </ProtectedRoute>
  );
}
