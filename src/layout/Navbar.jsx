import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-xl transition font-medium
        ${
          location.pathname === path
            ? "bg-indigo-100 text-indigo-600"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="bg-white shadow-sm px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">DeliverX</h1>

      <div className="flex gap-4">
        {navItem("/home", "Shop")}
        {navItem("/my-orders", "My Orders")}
        {navItem("/admin", "Admin")}
        {navItem("/deliveries", "Deliveries")}
      </div>

      <div className="text-gray-700 font-medium">
        Mayur Chaudhari
      </div>
    </div>
  );
}