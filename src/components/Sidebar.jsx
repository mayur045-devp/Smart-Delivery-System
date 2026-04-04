import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-blue-700 text-white p-6 fixed">
      <h2 className="text-2xl font-bold mb-8">Smart Delivery</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin" className="hover:bg-blue-600 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/admin/orders" className="hover:bg-blue-600 p-2 rounded">
          Manage Orders
        </Link>
        <Link to="/admin/products" className="hover:bg-blue-600 p-2 rounded">
          Manage Products
        </Link>
        <Link to="/agent/deliveries" className="hover:bg-blue-600 p-2 rounded">
          My Deliveries
        </Link>
      </nav>
    </div>
  );
}