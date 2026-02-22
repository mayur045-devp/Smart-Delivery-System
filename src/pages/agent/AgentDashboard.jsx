import Navbar from "../../components/Navbar";

export default function AgentDashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold">My Deliveries</h1>
        <div className="mt-4 p-4 bg-white shadow rounded">
          <p>Order #1234</p>
          <p>Address: Nashik Road</p>
          <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
            Mark Delivered
          </button>
        </div>
      </div>
    </div>
  );
}