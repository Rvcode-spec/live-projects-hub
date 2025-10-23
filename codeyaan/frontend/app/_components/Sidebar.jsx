"use client";
import Link from "next/link";

export default function Sidebar({ role }) {
  const menus = {
    admin: [
      { name: "Dashboard", path: "/dashboard/admin" },
      { name: "Staff Management", path: "/dashboard/admin/staff-management" },
      { name: "Student Management", path: "/dashboard/admin/student-management" },
      { name: "Settings", path: "/dashboard/admin/settings" },
    ],
    staff: [
      { name: "Dashboard", path: "/dashboard/staff" },
      { name: "Students", path: "/dashboard/staff/student-list" },
      { name: "Attendance", path: "/dashboard/staff/attendance" },
      { name: "Marks", path: "/dashboard/staff/marks" },
    ],
    student: [
      { name: "Dashboard", path: "/dashboard/student" },
      { name: "Courses", path: "/dashboard/student/courses" },
      { name: "Attendance", path: "/dashboard/student/attendance" },
      { name: "Results", path: "/dashboard/student/results" },
    ],
  };

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-4">
      <ul>
        {menus[role]?.map((item) => (
          <li key={item.path} className="mb-2">
            <Link href={item.path} className="text-gray-700 hover:text-blue-600">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
