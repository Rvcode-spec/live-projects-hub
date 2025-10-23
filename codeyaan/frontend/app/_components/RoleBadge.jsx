export default function RoleBadge({ role }) {
  const colors = {
    admin: "bg-red-500",
    staff: "bg-blue-500",
    student: "bg-green-500",
  };

  return (
    <span className={`px-3 py-1 text-white text-sm rounded ${colors[role]}`}>
      {role.toUpperCase()}
    </span>
  );
}
